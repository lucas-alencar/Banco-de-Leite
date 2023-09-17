import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

router.get('/usuarios', UsuarioController.listar);
router.post('/usuarios', UsuarioController.adicionar);
router.get('/usuarios/verificarSenha',UsuarioController.verificarSenha);
export default router;