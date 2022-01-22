import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'

import App from '@/App.vue'
import { useExampleStore } from '@/stores/example'
import router from '@/router'
import { createPinia, setActivePinia } from 'pinia'

describe('App.vue', async () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should just run', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: uno => uno
          }),
          router
        ]
      }
    })
    await router.isReady()

    expect(wrapper.find('[data-test-id="logo"]').attributes('alt')).toBe(
      'Vue logo'
    )

    // This expect is using pinia store:
    expect(wrapper.find('[data-test-id="example"]').text()).toContain(
      useExampleStore().sampleVariable
    )
  })
})
