<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types'

import { format } from 'date-fns'
const route = useRoute()

const fileRef = ref<{ input: HTMLInputElement }>()

const { isNotificationsSlideoverOpen } = useDashboard()

const items = [
  [
    {
      label: 'New mail',
      icon: 'i-heroicons-paper-airplane',
      to: '/inbox'
    },
    {
      label: 'New user',
      icon: 'i-heroicons-user-plus',
      to: '/users'
    }
  ]
]
const state = ref({
  name: 'Benjamin Canac',
  email: 'ben@nuxtlabs.com',
  username: 'benjamincanac',
  phone: '',
  emergancyContactPerson: '',
  gender: '',
  EmployeeID: '',
  Title: '',
  education: 'Bachelor office management',
  EmploymentStatus: '',

  Department: '',
  ContractStart: new Date(),
  ContractEnd: new Date()
})

const toast = useToast()

function validate(state: any): FormError[] {
  const errors = []
  if (!state.name)
    errors.push({ path: 'name', message: 'Please enter your name.' })
  if (!state.email)
    errors.push({ path: 'email', message: 'Please enter your email.' })
  if (
    (state.password_current && !state.password_new) ||
    (!state.password_current && state.password_new)
  )
    errors.push({ path: 'password', message: 'Please enter a valid password.' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)

  toast.add({ title: 'Profile updated', icon: 'i-heroicons-check-circle' })
}
const isInviteModalOpen = ref(false)

console.log(route.params.id)

const gender = ['Male', 'Female']
const workStatus = ['Full-time', 'Part-time', 'Temporary', 'Internship']
const selectedGender = ref('')
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home">
        <template #right>
          <UTooltip text="Notifications" :shortcuts="['N']">
            <UButton
              color="gray"
              variant="ghost"
              square
              @click="isNotificationsSlideoverOpen = true"
            >
              <UChip color="red" inset>
                <UIcon name="i-heroicons-bell" class="w-5 h-5" />
              </UChip>
            </UButton>
          </UTooltip>

          <UDropdown :items="items">
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="ml-1.5 rounded-full"
            />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <UDashboardPanelContent>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div class="col-span-2">
            <UDashboardCard
              title="Personal Information"
              description="Information regaring employee"
              icon="i-heroicons-user-circle"
            >
              <UForm
                :state="state"
                :validate="validate"
                :validate-on="['submit']"
                @submit="onSubmit"
              >
                <UFormGroup
                  name="firstName"
                  label="First Name"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <UInput v-model="state.name" autocomplete="off" size="md" />
                </UFormGroup>
                <UFormGroup
                  name="lastName"
                  label="Last Name"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.name"
                    autocomplete="off"
                    icon="i-heroicons-user"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="gender"
                  label="Gender"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <USelectMenu
                    v-model="selectedGender"
                    selected-icon="i-heroicons-hand-thumb-up-solid"
                    class="w-full lg:w-6/12"
                    placeholder="Select a gender"
                    :options="gender"
                  />
                </UFormGroup>

                <UFormGroup
                  name="phoneNumber"
                  label="Phone Number"
                  required
                  class="grid grid-cols-1 gap-2 mb-5"
                  :ui="{ container: '' }"
                >
                  <UInput
                    aria-placeholder="+251-11-657-2272"
                    v-model="state.phone"
                    type="string"
                    autocomplete="off"
                    icon="i-heroicons-phone"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="email"
                  label="Email"
                  required
                  class="grid grid-cols-1 gap-2 mb-5"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.email"
                    type="email"
                    autocomplete="off"
                    icon="i-heroicons-envelope"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="emergancyContactPerson"
                  label="Emergancy contact Person"
                  class="grid grid-cols-1 gap-2 mb-5"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.emergancyContactPerson"
                    aria-placeholder="name"
                    type="email"
                    autocomplete="off"
                    icon="i-heroicons-user"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="emergancyphoneNumber"
                  label="Emergancy Phone Number"
                  required
                  class="grid grid-cols-1 gap-2 mb-5"
                  :ui="{ container: '' }"
                >
                  <UInput
                    aria-placeholder="+251-11-657-2272"
                    v-model="state.phone"
                    type="string"
                    autocomplete="off"
                    icon="i-heroicons-phone"
                    size="md"
                  />
                </UFormGroup>
              </UForm>
            </UDashboardCard>
          </div>
          <div class="col-span-2">
            <UDashboardCard
              title="Professional Information"
              icon="i-heroicons-briefcase"
            >
              <UForm
                :state="state"
                :validate="validate"
                :validate-on="['submit']"
                @submit="onSubmit"
              >
                <UFormGroup
                  name="employeeId"
                  label="EmployeeID"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.EmployeeID"
                    autocomplete="off"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="title"
                  label="Title"
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.name"
                    autocomplete="off"
                    icon="i-heroicons-user"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="education"
                  label="Highest Education Attained"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.education"
                    autocomplete="off"
                    icon="i-heroicons-academic-cap"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="contractType"
                  label="Contract Type"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <USelectMenu
                    v-model="state.EmploymentStatus"
                    selected-icon="i-heroicons-hand-thumb-up-solid"
                    class="w-full lg:w-6/12"
                    placeholder="Select employee contract type"
                    :options="workStatus"
                  />
                </UFormGroup>
                <UFormGroup
                  name="department"
                  label="Department"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <USelectMenu
                    v-model="state.EmploymentStatus"
                    selected-icon="i-heroicons-hand-thumb-up-solid"
                    class="w-full lg:w-6/12"
                    placeholder="Select employee Department"
                    :options="workStatus"
                  />
                </UFormGroup>
                <UFormGroup
                  name="contractStart"
                  label="Contract start Date"
                  required
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.ContractStart"
                    type="date"
                    autocomplete="off"
                    icon="i-heroicons-user"
                    size="md"
                  />
                </UFormGroup>
                <UFormGroup
                  name="contractEnd"
                  label="Contract end Date"
                  class="grid grid-cols-1 gap-2 mb-5 items-center"
                  :ui="{ container: '' }"
                >
                  <UInput
                    v-model="state.ContractEnd"
                    type="date"
                    autocomplete="off"
                    icon="i-heroicons-user"
                    size="md"
                  />
                </UFormGroup>
              </UForm>
            </UDashboardCard>
          </div>
        </div>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>
