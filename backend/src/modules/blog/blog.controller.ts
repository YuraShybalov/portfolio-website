import { Request, Response } from 'express';

import { blogService } from './blog.service';
import { successResponse, createdResponse } from '../../utils/apiResponse';

export const blogController = {
  async getAllBlogs(_req: Request, res: Response) {
    const blogs = await blogService.getAllBlogs();

    return successResponse(res, blogs);
  },

  async getBlogById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const blog = await blogService.getBlogById(id);

    return successResponse(res, blog);
  },

  async createBlog(req: Request, res: Response) {
    const blog = await blogService.createBlog(req.body);

    return createdResponse(res, blog);
  },

  async updateBlog(req: Request, res: Response) {
    const id = Number(req.params.id);

    const blog = await blogService.updateBlog(id, req.body);

    return successResponse(res, blog);
  },

  async deleteBlog(req: Request, res: Response) {
    const id = Number(req.params.id);

    const result = await blogService.deleteBlog(id);

    return successResponse(res, result);
  },
};
