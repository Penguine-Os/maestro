import { z } from 'zod'

export const EmployeeSchema = z.object({
  firstName: z
    .string({
      required_error: "Can't be empty!"
    })
    .min(1),
  name: z.string().min(1),
  // email: z.string().email(),
  // username: z.string(),
  // phone: z.string(),
  // emergancyContactPerson: z.string(),
  // gender: z.string({ required_error: 'gender is required' }).min(1),
  // employeeID: z.string({ required_error: 'EmployeeID is required' }).min(1),
  // title: z.string().min(1),
  // education: z
  //   .string({ required_error: 'Eduction level is required' })
  //   .min(1),
  // employmentStatus: z
  //   .string({ required_error: 'Password is required' })
  //   .min(1),
  // department: z.string({ required_error: 'Department is required' }).min(1),
  contractStart: z.date(),
  contractEnd: z.date()
})
