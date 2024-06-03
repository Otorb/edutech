import { Storage } from '@google-cloud/storage';
import { format } from 'util';
import { parse, URL } from 'url';
import { v4 as uuidv4 } from 'uuid';
const uuid = uuidv4();

const storage = new Storage({
    projectId: "kotlyn-delivery-77c07",
    keyFilename: './src/serviceAccountKey.json'
});

const bucket = storage.bucket("gs://kotlyn-delivery-77c07.appspot.com/");

/**
 * Subir el archivo a Firebase Storage
 * @param {File} file objeto que sera almacenado en Firebase Storage
 */
export default (file, pathImage, deletePathImage) => {
    return new Promise((resolve, reject) => {
        
        console.log('delete path', deletePathImage)
        if (deletePathImage) {
            try {
                const url = new URL(deletePathImage);
                const pathname = url.pathname;

                //const filePath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
                const filePath = pathname.split('/o/')[1];

                if (filePath && filePath !== '/') {
                    const decodedFilePath = decodeURIComponent(filePath);
                    const fileDelete = bucket.file(decodedFilePath);
                    fileDelete.delete();
                    console.log('Se borró la imagen con éxito');
                } else {
                    console.log('La ruta de la imagen a borrar no es válida:', filePath);
                }

            } catch (error) {
                
            }

            /*if (deletePathImage != null || deletePathImage != undefined) {
                const parseDeletePathImage = parse(deletePathImage)
                var ulrDelete = parseDeletePathImage.pathname.slice(23);
                const fileDelete = bucket.file(ulrDelete)

                fileDelete.delete().then((imageDelete) => {

                    console.log('se borro la imagen con exito')
                }).catch(err => {
                    console.log('Failed to remove photo, error:', err)
                });

            }*/
        }


        if (pathImage) {
            if (pathImage != null || pathImage != undefined) {

                let fileUpload = bucket.file(`${pathImage}`);
                const blobStream = fileUpload.createWriteStream({
                    metadata: {
                        contentType: 'image/png',
                        metadata: {
                            firebaseStorageDownloadTokens: uuid,
                        }
                    },
                    resumable: false

                });

                blobStream.on('error', (error) => {
                    console.log('Error al subir archivo a firebase', error);
                    reject('Something is wrong! Unable to upload at the moment.');
                });

                blobStream.on('finish', () => {
                    // The public URL can be used to directly access the file via HTTP.
                    const url = format(`https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileUpload.name}?alt=media&token=${uuid}`);
                    console.log('URL DE CLOUD STORAGE ', url);
                    resolve(url);
                });

                blobStream.end(file.buffer);
            }
        }
    });
}