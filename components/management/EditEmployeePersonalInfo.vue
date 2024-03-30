<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useEmployeeEditor } from './hooks/useEmployeeEditor'

const { state } = useEmployeeEditor()
const toast = useToast()

const gender = ['Male', 'Female']
const workStatus = ['Full-time', 'Part-time', 'Temporary', 'Internship']
</script>

<template>
  <UDashboardPanelContent>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-4">
      <div class="col-span-2">
        <UDashboardCard
          title="Personal Information"
          description="Information regaring employee"
          icon="i-heroicons-user-circle"
        >
          <UFormGroup
            name="firstName"
            label="First Name"
            required
            eager-validation
            class="grid grid-cols-1 gap-2 mb-5 items-center"
            :ui="{ container: '' }"
          >
            <UInput v-model="state.firstName" autocomplete="off" size="md" />
          </UFormGroup>
          <UFormGroup
            name="lastName"
            label="Last Name"
            required
            eager-validation
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
          <!-- <UFormGroup
            name="gender"
            label="Gender"
            required
            class="grid grid-cols-1 gap-2 mb-5 items-center"
            :ui="{ container: '' }"
          >
            <USelectMenu
              v-model="state.gender"
              selected-icon="i-heroicons-hand-thumb-up-solid"
              class="w-full lg:w-6/12"
              placeholder="Select a gender"
              :options="gender"
            />
          </UFormGroup> -->
          <!-- 
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
          </UFormGroup> -->

          <!-- <UFormGroup
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
          </UFormGroup> -->

          <!-- <UFormGroup
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
           -->

          <!-- <UFormGroup
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
          </UFormGroup> -->
        </UDashboardCard>
      </div>
      <div class="col-span-2">
        <UDashboardCard
          title="Professional Information"
          icon="i-heroicons-briefcase"
        >
          <!-- <UFormGroup
            name="employeeId"
            label="EmployeeID"
            required
            class="grid grid-cols-1 gap-2 mb-5 items-center"
            :ui="{ container: '' }"
          >
            <UInput v-model="state.EmployeeID" autocomplete="off" size="md" />
          </UFormGroup> -->

          <!-- <UFormGroup
            name="title"
            label="Title"
            class="grid grid-cols-1 gap-2 mb-5 items-center"
            :ui="{ container: '' }"
          >
            <UInput
              v-model="state.Title"
              autocomplete="off"
              icon="i-heroicons-user"
              size="md"
            />
          </UFormGroup> -->

          <!-- <UFormGroup
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
          </UFormGroup> -->

          <!-- <UFormGroup
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
          </UFormGroup> -->

          <!-- <UFormGroup
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
          </UFormGroup> -->
          <UFormGroup
            name="contractStart"
            label="Contract start Date"
            required
            eager-validation
            class="grid grid-cols-1 gap-2 mb-5 items-center"
            :ui="{ container: '' }"
          >
            <UInput
              v-model="state.contractStart.toISOString().split('T')[0]"
              type="date"
              autocomplete="off"
              icon="i-heroicons-user"
              size="md"
            />
          </UFormGroup>
          <UFormGroup
            name="contractEnd"
            label="Contract end Date"
            eager-validation
            class="grid grid-cols-1 gap-2 mb-5 items-center"
            :ui="{ container: '' }"
          >
            <UInput
              v-model="state.contractEnd.toISOString().split('T')[0]"
              type="date"
              autocomplete="off"
              icon="i-heroicons-user"
              size="md"
            />
          </UFormGroup>
        </UDashboardCard>
      </div>
      <div class="sm:col-start-2 sm:col-span-2 col-span-2">
        <slot> </slot>
      </div>
    </div>
  </UDashboardPanelContent>
</template>
