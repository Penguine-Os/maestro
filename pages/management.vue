<script lang="ts" setup>
const links = [
  [
    {
      label: 'General',
      icon: 'i-heroicons-users',
      to: '/management',
      exact: true
    }
  ]
]
function toggle() {
  isOpen.value = !isOpen.value
}

const isOpen = ref(false)
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Management" />

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>
      <UDashboardSlideover v-model="isOpen" title="Notifications" />
      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
