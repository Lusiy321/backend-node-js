/// <reference types="node" />
export declare class FilesService {
    createFile(file: {
        buffer: string | NodeJS.ArrayBufferView;
    }): Promise<string>;
}
