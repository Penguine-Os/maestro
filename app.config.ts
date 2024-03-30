export default defineAppConfig({
  ui: {
    primary: 'teal',
    secondary: 'sky',
    gray: 'cool',
    tooltip: {
      default: {
        openDelay: 500
      }
    },
    tabs: {
      list: {
        rounded: '',
        padding: 'px-3',
        tab: {
          active: 'text-teal-800 dark:text-teal-400',
          inactive: 'text-teal-600 dark:text-teal-800'
        }
      }
    }
  }
})
