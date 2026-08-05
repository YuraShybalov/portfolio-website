import { Router } from 'express';

import { authenticate } from '../../middleware/auth.middleware';
import { asyncHandler } from '../../utils/asyncHandler';
import { validate } from '../../middleware/validate';

import { blogController } from './blog.controller';

import { createBlogSchema, updateBlogSchema, blogIdSchema } from './blog.validator';

const router = Router();

router.get('/', asyncHandler(blogController.getAllBlogs));

router.get('/:id', validate(blogIdSchema, 'params'), asyncHandler(blogController.getBlogById));

router.post('/', authenticate, validate(createBlogSchema), asyncHandler(blogController.createBlog));

router.patch(
  '/:id',
  authenticate,
  validate(blogIdSchema, 'params'),
  validate(updateBlogSchema),
  asyncHandler(blogController.updateBlog),
);

router.delete(
  '/:id',
  authenticate,
  validate(blogIdSchema, 'params'),
  asyncHandler(blogController.deleteBlog),
);

export default router;
