import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '@/App.vue'

describe('App.vue', () => {
  it('should just run', () => {
    const wrapper = mount(App)
    expect(
      wrapper
        .find('[data-test-id="logo"]').attributes('alt'))
        .toBe('Vue logo')
  })

})