import {isValidFasta} from "./fasta.js";
import {Either} from "./type.js";

const SUPPORTED_FILE_FORMATS = [
    {
        format: "fasta",
        ext: "fasta",
        isSupportedFormat: (content) => {
            return isValidFasta(content);
        }
    },
    {
        format: "text",
        ext: "txt",
        isSupportedFormat: (content) => {
            try {
               const buffer = Buffer.isBuffer(content) ? content : Buffer.from(content);
               const decoded = buffer.toString('utf-8');
               const reEncoded = Buffer.from(decoded, 'utf-8');
               return buffer.equals(reEncoded);
            } catch (error) {
                return false;
            }
        }
    }
]


const getSupportedFileExtensions = () => {
   return SUPPORTED_FILE_FORMATS.map(format => format.ext);
}

export const isSupported = (extension, content) => {
   if (isSupportedExtension(extension)) {
       return true;
   }
   if (!isSupportedExtension(extension) && !content) {
       return false;
   }
   return isSupportedFileFormat(content);
}

export const isSupportedFile = async (file) => {
    const fileInfo = await getFile(file);
    return isSupported(fileInfo.ext, fileInfo.content);
}

export const isSupported0 = fileInfo => {
    if (!fileInfo) return false;
    return isSupported(fileInfo.ext, fileInfo.content);
}

const isSupportedExtension = extension => {
   return SUPPORTED_FILE_FORMATS.map(format => format.ext).includes(extension);
}

const isSupportedFileFormat = (content) => {
    for(let i = 0; i < SUPPORTED_FILE_FORMATS.length; i++) {
        if (SUPPORTED_FILE_FORMATS[i].isSupportedFormat(content)) return true;
    }
    return false;
}


export const getFileExtension = (fileName) => {
    const parts = fileName.split(".");
    return parts.length > 1 ? parts.pop() : null;
}


export const getFile = async (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            resolve({
                name: file.name,
                ext: getFileExtension(file.name),
                content: content,
                isValid: true,
            });
        };
        reader.onerror = () => {
            resolve({
                name: file.name,
                isValid: false,
                error: "Error reading file",
                ext: getFileExtension(file.name)
            });
        };
        reader.readAsText(file);
    });
};


export const allFilesWithFormat = async (files, format) => {
    if (!files || files.length === 0) return false;
    const fileInfos =  [];
    for(let i = 0; i < files.length; i++) {
        const fileInfo = await getFile(files[i]);
        if (!isSupported(fileInfo.ext, fileInfo.content)) {
            return false;
        }
        if (fileInfo.ext !== format) {
            return false;
        }
        fileInfos.push(fileInfo) ;
    }
    return fileInfos.length === files.length;
}

export const allFilesWithSupportedFormat = (files) => {
    for(let i = 0; i < SUPPORTED_FILE_FORMATS.length; i++) {
        const format = SUPPORTED_FILE_FORMATS[i];
        const ext = format.ext;
        const supported = allFilesWithFormat(files, ext);
        if (supported) {
            return true;
        }
    }
    return false;
}


const getFileEither = (file) => {
    if (!isSupported0(file)) {
        return Either.left("The file is not supported! Supported formats: " + getSupportedFileExtensions().join(", "));
    } else {
       return Either.right(file);
    }
}




export const getAllValidFilesOrError = (files) => {
    const result = Array.from(files).map(getFileEither);
    const errors = result.filter(rs => rs.isLeft()).map(rs => rs.left);
    if (errors.length > 0) {
        return Either.left(errors[0]);
    }
    return Either.right(
        result.map(rs => rs.right)
    );
}



