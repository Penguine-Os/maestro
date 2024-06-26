<script lang="ts" setup>
import type { User } from '~/types'

const router = useRouter()

const defaultColumns = [
  {
    key: 'id',
    label: '#'
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true
  },
  {
    key: 'location',
    label: 'Location'
  },
  {
    key: 'status',
    label: 'Status'
  },
  {
    key: 'actions'
  }
]
const items = (row: User) => [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => {
        console.log('Edit', row.id)
      }
    }
  ],
  [
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid'
    }
  ]
]
const q = ref('')
const selected = ref<User[]>([])
const selectedColumns = ref(defaultColumns)
const selectedStatuses = ref([])
const selectedLocations = ref([])
const sort = ref({ column: 'id', direction: 'asc' as const })
const input = ref<{ input: HTMLInputElement }>()
const isNewUserModalOpen = ref(false)

const columns = computed(() =>
  defaultColumns.filter((column) => selectedColumns.value.includes(column))
)

const query = computed(() => ({
  q: q.value,
  statuses: selectedStatuses.value,
  locations: selectedLocations.value,
  sort: sort.value.column,
  order: sort.value.direction
}))

const { data: users, pending } = await useFetch('/api/users', {
  query,
  default: () => []
})

const defaultLocations = users.value.reduce((acc, user) => {
  if (!acc.includes(user.location)) {
    acc.push(user.location)
  }
  return acc
}, [] as string[])

const defaultStatuses = users.value.reduce((acc, user) => {
  if (!acc.includes(user.status)) {
    acc.push(user.status)
  }
  return acc
}, [] as string[])

function onSelect(row: User) {
  router.push(`/management/users/${row.id}`)
}

defineShortcuts({
  '/': () => {
    input.value?.input?.focus()
  }
})
</script>

<template>
  <UDashboardPanelContent>
    <UDashboardModal
      v-model="isNewUserModalOpen"
      title="New user"
      description="Add a new user to your database"
      :ui="{ width: 'sm:max-w-md' }"
    >
      <!-- ~/components/users/UsersForm.vue -->
      <UsersForm @close="isNewUserModalOpen = false" />
    </UDashboardModal>

    <UTable
      v-model:sort="sort"
      :rows="users"
      :columns="columns"
      :loading="pending"
      sort-mode="manual"
      class="w-full"
      :ui="{ divide: 'divide-gray-200 dark:divide-gray-800' }"
      @select="onSelect"
    >
      <template> </template>
      <template #name-data="{ row }">
        <div class="flex items-center gap-3">
          <UAvatar v-bind="row.avatar" :alt="row.name" size="xs" />

          <span class="text-gray-900 dark:text-white font-medium">{{
            row.name
          }}</span>
        </div>
      </template>

      <template #status-data="{ row }">
        <UBadge
          :label="row.status"
          :color="
            row.status === 'subscribed'
              ? 'green'
              : row.status === 'bounced'
              ? 'orange'
              : 'red'
          "
          variant="subtle"
          class="capitalize"
        />
      </template>

      <template #actions-data="{ row }">
        <UDropdown :items="items(row)" @click.stop="">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </UDropdown>
      </template>
    </UTable>
  </UDashboardPanelContent>
</template>
