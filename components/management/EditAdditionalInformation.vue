<script setup lang="ts">
import { useEmployeeEditor } from '~/components/management/hooks/useEmployeeEditor'

const { state, onSubmit } = useEmployeeEditor()
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
