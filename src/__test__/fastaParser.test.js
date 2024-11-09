/* eslint-disable */
import {expect, test} from "vitest";
import {
    getCleanSequence,
    hasMetadata,
    isValidFastaSequenceWithHeader,
    isValidFastaSequenceWithoutHeader,
    parseFasta,
    parseMetadata,
    validSequence
} from "../functions/fasta.js";

// Test cases for hasMetadata function
test("hasMetadata returns true for valid metadata", () => {
    const content = ">seq1 Homo sapiens (Human)";
    expect(hasMetadata(content)).toBe(true);
});

test("hasMetadata returns false for content without metadata", () => {
    const content = "ATCGTTAG";
    expect(hasMetadata(content)).toBe(false);
});

test("hasMetadata returns false for empty content", () => {
    const content = "";
    expect(hasMetadata(content)).toBe(false);
});

// Test cases for parseMetadata function
test("parseMetadata extracts metadata fields correctly", () => {
    const content = ">seq1 Homo sapiens (Human)";
    const metadata = parseMetadata(content);
    expect(metadata).toEqual({
        accession: "seq1",
        scientificName: "Homo sapiens",
        commonName: "Human"
    });
});

test("parseMetadata returns empty object if no metadata is found", () => {
    const content = "ATCGTTAG";
    const metadata = parseMetadata(content);
    expect(metadata).toEqual({});
});

// Test cases for getCleanSequence function
test("getCleanSequence returns lowercase sequence without header", () => {
    const content = ">seq1\nATCG\nTAGC";
    const sequence = getCleanSequence(content);
    expect(sequence).toBe("atcgtagc");
});

test("getCleanSequence returns lowercase sequence without header when no metadata is present", () => {
    const content = "ATCG\nTAGC";
    const sequence = getCleanSequence(content);
    expect(sequence).toBe("atcgtagc");
});

test("getCleanSequence returns undefined for invalid sequence", () => {
    const content = "XYZABC";
    expect(getCleanSequence(content)).toBeUndefined();
});

// Test cases for isValidFastaSequenceWithHeader function
test("isValidFastaSequenceWithHeader returns true for valid DNA sequence with header", () => {
    const content = ">seq1\nATCGTAGC";
    expect(isValidFastaSequenceWithHeader(content)).toBe(true);
});

test("isValidFastaSequenceWithHeader returns false for sequence without header", () => {
    const content = "ATCGTAGC";
    expect(isValidFastaSequenceWithHeader(content)).toBe(false);
});

// Test cases for isValidFastaSequenceWithoutHeader function
test("isValidFastaSequenceWithoutHeader returns true for valid DNA sequence without header", () => {
    const content = "ATCGTAGC";
    expect(isValidFastaSequenceWithoutHeader(content)).toBe(true);
});

test("isValidFastaSequenceWithoutHeader returns false for invalid sequence without header", () => {
    const content = "XYZABC";
    expect(isValidFastaSequenceWithoutHeader(content)).toBe(false);
});

// Test cases for validSequence function
test("validSequence returns true for valid DNA sequence", () => {
    const content = "ATCGTAGC";
    expect(validSequence(content)).toBe(true);
});

test("validSequence returns true for valid RNA sequence", () => {
    const content = "AUCGUAGC";
    expect(validSequence(content)).toBe(true);
});

test("validSequence returns true for valid protein sequence", () => {
    const content = "ACDEFGHIKLMNPQRSTVWY";
    expect(validSequence(content)).toBe(true);
});

test("validSequence returns false for invalid characters in sequence", () => {
    const content = "XYZ123";
    expect(validSequence(content)).toBe(false);
});

// Test cases for parseMultipleFasta function
test("parseMultipleFasta correctly parses multiple sequences", () => {
    const fastaData = ">seq1 Homo sapiens (Human)\nATCG\nTAGC\n>seq2 Mus musculus (Mouse)\nGCTA\nAGCT";
    const parsed = parseFasta(fastaData).data;
    expect(parsed).toEqual([
        {
            accession: "seq1",
            scientificName: "homo sapiens",
            commonName: "human",
            sequence: "atcgtagc"
        },
        {
            accession: "seq2",
            scientificName: "mus musculus",
            commonName: "mouse",
            sequence: "gctaagct"
        }
    ]);
});

test("parseMultipleFasta handles empty input gracefully", () => {
    const fastaData = "";
    const parsed = parseFasta(fastaData).data;
    expect(parsed).toEqual([]);
});