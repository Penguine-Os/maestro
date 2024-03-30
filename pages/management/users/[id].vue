<script setup lang="ts">
import { useEmployeeEditor } from '~/components/management/hooks/useEmployeeEditor'

const route = useRoute()
const router = useRouter()
const tabItems = [
  {
    slot: 'employeeDetails',
    label: 'Employee Details'
  },
  {
    slot: 'additionalInfo',
    label: 'AdditionalInfo Information'
  }
]
const selected = computed({
  get() {
    const index = tabItems.findIndex((item) => item.label === route.query.tab)
    if (index === -1) {
      return 0
    }

    return index
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({
      query: { tab: tabItems[value].label },
      hash: '#control-the-selected-index'
    })
  }
})
const next = () => selected.value++

const previous = () => selected.value--

const { state, onSubmit: onSubmitHook, EmployeeSchema } = useEmployeeEditor()
</script>

<template>
  <UForm
    :schema="EmployeeSchema"
    :state="state"
    class="w-full overflow-auto"
    @submit="onSubmitHook"
  >
    <UTabs :items="tabItems" class="" v-model="selected">
      <template #employeeDetails="{ item }">
        <ManagementEditEmployeePersonalInfo>
          <div class="flex space-x-4">
            <div class="flex-1">
              <UButton
                label="Next"
                color="sky"
                varient="outline"
                @click="next"
                block
              >
                <template #trailing>
                  <UIcon
                    name="i-heroicons-arrow-right-circle"
                    class="w-5 h-5"
                  />
                </template>
              </UButton>
            </div>
            <div class="flex-1">
              <UButton label="Save" color="primary" type="submit" block>
                <template #trailing>
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
                </template>
              </UButton>
            </div>
          </div>
        </ManagementEditEmployeePersonalInfo>
      </template>

      <template #additionalInfo="{ item }">
        <ManagementEditAdditionalInformation>
          <div class="flex space-x-4">
            <div class="flex-1">
              <UButton
                label="Back"
                color="sky"
                varient="outline"
                @click="previous"
                block
              >
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-left-circle" class="w-5 h-5" />
                </template>
              </UButton>
            </div>
            <div class="flex-1">
              <UButton label="Button" type="submit" color="primary" block>
                <template #trailing>
                  <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
                </template>
              </UButton>
            </div>
          </div>
        </ManagementEditAdditionalInformation>
      </template>
    </UTabs>
  </UForm>
</template>
