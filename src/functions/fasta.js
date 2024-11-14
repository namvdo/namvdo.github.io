import {parseAccessionNumber} from "./cache.js";

export const hasMetadata = (content) => {
    if (!content || content.trim() === '') {
        return false;
    }
    const lines = content.split("\n");
    if (lines.length === 0) {
        return false;
    }
    return lines[0].startsWith(">");
}


export const parseMetadata = (content) => {
    if (!hasMetadata(content)) {
        return {};
    }
    const metadata = {
        accession: "",
        scientificName: "",
        commonName: "",
    }
    const header = content.split("\n")[0];
    const commonNameMatch = header.match(/\((.*?)\)/);
    if (commonNameMatch) {
        metadata.commonName = commonNameMatch[1].trim();
    }
    const accession = parseAccessionNumber(header.split(">")[1].split(" ")[0]);
    metadata.accession = accession;
    const names = header.substring(header.indexOf(accession) + accession.length);
    const scientificNameMatch = names.match(/\s*([\w\s]+?)(?:\s*\(|$)/);
    if (scientificNameMatch) {
        metadata.scientificName = scientificNameMatch[1].trim();
    }
    return metadata;
}


export const getCleanSequence = (content) => {
    const withHeader = isValidFastaSequenceWithHeader(content);
    const withoutHeader = isValidFastaSequenceWithoutHeader(content);

    if (!withoutHeader && !withHeader) {
        return;
    }
    const sequence = content.split("\n");
    if (withHeader) {
        let seq = "";
        for (let i = 1; i < sequence.length; i++) {
            seq += sequence[i].toLowerCase().trim();
        }
        return seq;
    }
    if (withoutHeader) {
        let seq = "";
        for (let i = 0; i < sequence.length; i++) {
            seq += sequence[i].toLowerCase().trim();
        }
        return seq;
    }
    return "";
}


export const isValidFastaSequenceWithHeader = (content) => {
    if (hasMetadata(content)) {
        return validSequence(getOnlySequence(content));
    } else {
        return false;
    }
}

const getOnlySequence = (content) => {
    if (hasMetadata(content)) {
        let seq = "";
        const lines = content.split("\n");
        for (let i = 1; i < lines.length; i++) {
            seq += lines[i];
        }
        return seq;
    } else {
        return content;
    }
}
export const isValidFastaSequenceWithoutHeader = (content) => {
    return validSequence(content);
}

export const validSequence = (content) => {
    const cleanContent = content.replace(/\s/g, '');
    const isDna = /^[ATCGNatcgn\s]*$/.test(cleanContent);  // DNA
    if (isDna) return true;
    const isRna = /^[AUCGNaucgn\s]*$/.test(cleanContent);  // RNA
    if (isRna) {
        return true;
    }
    return /^[ACDEFGHIKLMNPQRSTVWY\s]*$/.test(cleanContent); // protein
}


export const parseFasta = (fastaData) => {
    const lines = fastaData.split("\n").map(line => line.toLowerCase());
    let currentHeader = {};
    let currentSequence = "";
    const sequences = [];

    lines.forEach(line => {
        if (line.startsWith(">") || line.trim() === '') {
            if (currentHeader && currentSequence) {
                const cleanSequence = getCleanSequence(currentSequence);
                sequences.push(
                    {
                        ...currentHeader,
                        sequence: cleanSequence
                    }
                );
                currentHeader = {};
                currentSequence = "";
            }
            if (hasMetadata(line)) {
                currentHeader = parseMetadata(line);
            }
        } else {
            currentSequence += line.trim();
        }
    });
    if (currentHeader && currentSequence) {
        sequences.push({
            ...currentHeader,
            sequence: currentSequence
        })
    }
    return {
        data: sequences,
        valid: true,
        clean: true
    }
}


