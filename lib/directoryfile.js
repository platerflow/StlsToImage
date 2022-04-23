import { readdirSync } from 'fs';

export default class DirectoryFile {
    recursiveRead(dir, callback) {
        const results = readdirSync(dir, { withFileTypes: true });

        results.forEach(result => {
            const path = dir+"/"+result.name;
            if ( result.isDirectory() ) {
                this.recursiveRead(path, callback);
            } else if ( result.isFile() ) {
                if ( !result.name.startsWith(".") ) {
                    callback({ dir, file: result.name, path });
                }
            }
        });
    }
}