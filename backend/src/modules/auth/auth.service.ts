import bcrypt from 'bcrypt';

import { prisma } from '../../database/prisma/prisma';
import { ApiError } from '../../utils/ApiError';
import { generateAccessToken } from '../../config/jwt';

import { LoginDto } from './auth.validator';

export const authService = {
  async login(data: LoginDto) {
    const admin = await prisma.admin.findUnique({
      where: {
        login: data.login,
      },
    });

    if (!admin) {
      throw new ApiError(401, 'Invalid login or password');
    }

    const isPasswordValid = await bcrypt.compare(data.password, admin.passwordHash);

    if (!isPasswordValid) {
      throw new ApiError(401, 'Invalid login or password');
    }

    const token = generateAccessToken({
      adminId: admin.id,
      login: admin.login,
    });

    return {
      token,
      admin: {
        id: admin.id,
        login: admin.login,
        email: admin.email,
      },
    };
  },
};
