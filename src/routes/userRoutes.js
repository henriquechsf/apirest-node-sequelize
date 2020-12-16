import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir por performance e segurança
router.get('/', userController.index);
router.get('/:id', userController.show);

// usado somente em painel adm
// router.put('/:id', userController.update);
// router.delete('/:id', userController.delete);

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * index - listar todos -> GET
 * store/create - adiciona um novo -> POST
 * delete - apaga -> DELETE
 * show - mostra um -> GET
 * update - atualiza -> PATH ou PUT
 */
