import express from 'express';
import controller from '../controller/controller';

const router = express.Router();


router.get('/',controller.loadPage);
router.post('/addUser',controller.addUser);
router.patch('/editUser/:userId',controller.editUser);
router.delete('/deleteUser/:userId',controller.deleteUser);

export default router;


