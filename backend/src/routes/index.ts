import { Router } from 'express';
import profileRoutes from '../modules/profile/profile.routes';
import projectRoutes from '../modules/projects/project.routes';
import technologyRoutes from '../modules/technologies/technology.routes';
import socialRoutes from '../modules/social/social.routes';
import certificateRoutes from '../modules/certificates/certificate.routes';
import careerRoutes from '../modules/career/career.routes';
import educationRoutes from '../modules/education/education.routes';
import contactRoutes from '../modules/contacts/contact.routes';
import blogRoutes from '../modules/blog/blog.routes';

const router = Router();

router.use('/profile', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/technologies', technologyRoutes);
router.use('/social', socialRoutes);
router.use('/certificates', certificateRoutes);
router.use('/career', careerRoutes);
router.use('/education', educationRoutes);
router.use('/contact', contactRoutes);
router.use('/blog', blogRoutes);
export default router;
