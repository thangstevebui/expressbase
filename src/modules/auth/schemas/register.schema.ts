import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255),
  phone: z.string().min(10).max(10).optional(),
  avatar: z.string().url().optional(),
});
