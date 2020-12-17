import multer from 'multer';
import multerConfig from '../config/multerConfig';

// captura o arquivo enviado
const upload = multer(multerConfig).single('arquivo');

class FotoController {
  async create(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();
