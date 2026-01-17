import { z } from 'zod';

// Common validation patterns
const namePattern = /^[a-zA-Z\s\-'\.]+$/;
const phonePattern = /^[\d\s\+\-\(\)]+$/;
const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// Helper function to sanitize text for mailto links
export const sanitizeForMailto = (text: string): string => {
  return text
    .replace(/[\r\n]+/g, '\n') // Normalize line breaks
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim();
};

// Contact Sales Modal Schema
export const contactSalesSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(namePattern, 'First name contains invalid characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(namePattern, 'Last name contains invalid characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

export type ContactSalesFormData = z.infer<typeof contactSalesSchema>;

// Job Application Modal Schema
export const jobApplicationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(namePattern, 'First name contains invalid characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(namePattern, 'Last name contains invalid characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  phone: z
    .string()
    .max(20, 'Phone number must be less than 20 characters')
    .regex(phonePattern, 'Phone number contains invalid characters')
    .optional()
    .or(z.literal('')),
  linkedIn: z
    .string()
    .max(200, 'LinkedIn URL must be less than 200 characters')
    .refine(
      (val) => !val || val.includes('linkedin.com') || urlPattern.test(val),
      'Please enter a valid LinkedIn URL'
    )
    .optional()
    .or(z.literal('')),
  coverLetter: z
    .string()
    .max(3000, 'Cover letter must be less than 3000 characters')
    .optional()
    .or(z.literal('')),
});

export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;

// Contact Page Schema
export const contactPageSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(namePattern, 'First name contains invalid characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(namePattern, 'Last name contains invalid characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  phone: z
    .string()
    .max(20, 'Phone number must be less than 20 characters')
    .regex(phonePattern, 'Phone number contains invalid characters')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters'),
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(150, 'Subject must be less than 150 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

export type ContactPageFormData = z.infer<typeof contactPageSchema>;
