import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    // onde sera salvo as fotos
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', 'uploads'));
    },
    // nome do arquivo
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
