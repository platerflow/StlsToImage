import DirectoryFile from "./lib/directoryfile.js";
import Thumbnailer from "./lib/thumbnailer.js";

const StlsToImage = class StlsToImage {
    constructor() {

    }

    run() {
        if ( process.argv[2] == undefined ) {
            console.log("No directory given as parameter");
            process.exit();
        } else {
            const files = new DirectoryFile();
            const thumbnailer = new Thumbnailer();
            files.recursiveRead(process.argv[2], item => {
                if ( item.file.endsWith(".stl") ) {
                    thumbnailer.addThumbnail(item.path, item.path+".png", 200, 200, "rgb(190, 39, 36)");
                }
            });
        }
    }
}

const app = new StlsToImage();
app.run();