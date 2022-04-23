import StlThumbnailer from 'node-stl-to-thumbnail';
import { writeFileSync } from 'fs';

export default class Thumbnailer {
   addThumbnail(inputFile, outputFile, width, height, baseColor) {
        return new Promise((res, rej) => {
            new StlThumbnailer({
                filePath: inputFile,
                requestThumbnails: [
                    {
                        width: width,
                        height: height,
                        baseOpacity: 1,
                        metallicOpacity: 0.2,
                        showMinorEdges: false,
                        cameraAngle: [50, 50, 100],
                        //  backgroundColor: 0x2f3033,
                        // backgroundColor: 0x242527,
                        backgroundColor: 0x000000,
                        baseColor: baseColor,
                        lineColor: 0x000000
                    }
                ]
            }).then(thumbnails => {
                thumbnails[0].toBuffer((err, buf) => {
                    if (err != undefined) {
                        rej(err);
                    } else {
                        writeFileSync(outputFile, buf);
                        res();
                    }
                });
            }).catch(err => rej(err));
        });
    }
}