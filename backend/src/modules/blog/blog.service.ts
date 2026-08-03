import { prisma } from '../../database/prisma/prisma';

import { CreateBlogDto, UpdateBlogDto } from './blog.validator';

export const blogService = {
  async getAllBlogs() {
    return prisma.blogPost.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getBlogById(id: number) {
    return prisma.blogPost.findUniqueOrThrow({
      where: { id },
    });
  },

  async createBlog(data: CreateBlogDto) {
    return prisma.blogPost.create({
      data,
    });
  },

  async updateBlog(id: number, data: UpdateBlogDto) {
    return prisma.blogPost.update({
      where: { id },
      data,
    });
  },

  async deleteBlog(id: number) {
    await prisma.blogPost.delete({
      where: { id },
    });

    return {
      message: 'Blog deleted successfully',
    };
  },
};
