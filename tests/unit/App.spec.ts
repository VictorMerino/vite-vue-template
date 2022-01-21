import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '@/App.vue'
import { createPinia, setActivePinia } from 'pinia'

import { useExampleStore } from '@/stores/example'

describe('App.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should just run', () => {
    const wrapper = mount(App)
    expect(
      wrapper
        .find('[data-test-id="logo"]').attributes('alt'))
        .toBe('Vue logo')

    // This expect is using pinia store:
    expect(
      wrapper
        .find('[data-test-id="example"]').text())
        .toContain(useExampleStore().sampleVariable)
  })

})