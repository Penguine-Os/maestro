import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'

const end = new Date()
end.setFullYear(2025)
const state = ref({
  firstName: 'Canac',
  lastName: 'Benjamin',
  contractStart: new Date().toISOString().split('T')[0],
  contractEnd: end.toISOString().split('T')[0]
})

const EmployeeSchema = z
  .object({
    firstName: z
      .string()
      .min(3, 'First name must be at least 3 characters long.')
      .regex(/^[A-Za-z\s]+$/, 'First name must not contain special symbols.'),
    lastName: z
      .string()
      .min(3, 'Last name must be at least 3 characters long.')
      .regex(/^[A-Za-z\s]+$/, 'Last name must not contain special symbols.'),
    contractStart: z.string(),
    contractEnd: z.string()
  })
  // .superRefine((data, ctx) => {
  //   if (new Date(data.contractStart) > new Date(data.contractEnd)) {
  //     ctx.addIssue({
  //       code: z.ZodIssueCode.custom,
  //       message: 'Contract end date must be after contract start date.',
  //       path: ['contractEnd', 'contractStart']
  //     })
  //   }
  // })
  .refine((data) => new Date(data.contractStart) < new Date(data.contractEnd), {
    message: 'Contract end date must be after contract start date.',
    path: ['contractEnd']
  })

export function useEmployeeEditor() {
  const onSubmit = async (
    event: FormSubmitEvent<z.output<typeof EmployeeSchema>>
  ) => {
    // Do something with data
    console.log(event.data)
  }

  return {
    state,
    EmployeeSchema,
    onSubmit
  }
}
