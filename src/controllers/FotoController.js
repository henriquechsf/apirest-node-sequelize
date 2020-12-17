import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

// captura o arquivo enviado
const upload = multer(multerConfig).single('arquivo');

class FotoController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(foto);
    });
  }
}

export default new FotoController();
