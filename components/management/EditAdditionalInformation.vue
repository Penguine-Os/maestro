<script setup lang="ts">
import { useEmployeeEditor } from '~/components/management/hooks/useEmployeeEditor'

const { state } = useEmployeeEditor()
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
            name="bio"
            label="Bio"
            required
            eager-validation
            class="grid grid-cols-1 gap-2 mb-5 items-center"
            :ui="{ container: '' }"
          >
            <UTextarea v-model="state.bio" />
          </UFormGroup>
        </UDashboardCard>
      </div>
      <div class="col-span-2">
        <UDashboardCard
          title="Professional Information"
          icon="i-heroicons-briefcase"
        >
        </UDashboardCard>
      </div>
      <div class="sm:col-start-2 sm:col-span-2 col-span-2">
        <slot> </slot>
      </div>
    </div>
  </UDashboardPanelContent>
</template>
