import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'

const end = new Date()
end.setFullYear(2025)
const state = ref({
  firstName: 'Canac',
  name: 'Benjamin Canac',
  contractStart: new Date(),
  contractEnd: end
})

const EmployeeSchema = z
  .object({
    firstName: z
      .string({
        required_error: "Can't be empty!"
      })
      .min(1),
    name: z.string().min(1),
    contractStart: z.date(),
    contractEnd: z.date()
  })
  .refine((data) => data.contractStart < data.contractEnd)

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
