import { Router } from "express";
import { addApplication, deleteApplicationById, getAllApplications, getApplicationById, updateApplicationById} from "../controllers/applicationControllers"
import {protect} from "../middleware/authMiddleware"

const router = Router();


router.use(protect);
router.post('/applications', addApplication);
router.get('/applications', getAllApplications);
router.get('/applications/:id', getApplicationById);
router.put('/applications/:id', updateApplicationById);
router.delete('/applications/:id', deleteApplicationById);

export default router;