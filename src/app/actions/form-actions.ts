// app/actions/form-actions.ts
"use server";

import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const BaseSchema = z.object({
  email: z.string().email(),
  action: z.enum(['create', 'update', 'delete'])
});

const CreateSchema = BaseSchema.extend({
  name: z.string().min(2),
  password: z.string().min(8)
});

const UpdateSchema = BaseSchema.extend({
  name: z.string().min(2).optional(),
  password: z.string().min(8).optional()
});


// app/actions/form-actions.ts
export async function submitForm(
    prevState: { message: string; success?: boolean },
    formData: FormData
  ) {
    try {
      const rawData = {
        action: formData.get('action'), // Keep action for operation control
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password')
      };
  
      const action = rawData.action as 'create' | 'update' | 'delete';
  
      // Remove action from database payload
      const { action: _, ...dbData } = rawData;
  
      switch (action) {
        case 'create':
          const createData = CreateSchema.parse(dbData); // Validate WITHOUT action
          await prisma.user.create({
            data: {
              email: createData.email,
              name: createData.name,
              password: createData.password
            }
          });
          return { 
            message: 'User created successfully!',
            success: true
          };
  
        // ... rest of switch cases
        case 'update':
        const updateData = UpdateSchema.parse(rawData);
        await prisma.user.update({
          where: { email: updateData.email },
          data: {
            ...(updateData.name && { name: updateData.name }),
            ...(updateData.password && { password: updateData.password })
          }
        });
        return { 
          message: 'User updated successfully!',
          success: true
        };

      case 'delete':
        BaseSchema.parse(rawData);
        if (typeof rawData.email === 'string') {
          await prisma.user.delete({ where: { email: rawData.email } });
        } else {
          throw new Error('Invalid email');
        }
        return { 
          message: 'User deleted successfully!',
          success: true
        };

      default:
        return { message: 'Invalid action' };
    }
      } catch (error) {
      // ... error handling
      if (error instanceof z.ZodError) {
        return { message: error.errors[0].message };
      }
      if (error instanceof Error) {
        return { message: error.message };
      }
      return { message: 'An error occurred. Please try again.' };
    }
  }
  