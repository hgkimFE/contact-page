import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderCard from '../HeaderCard.vue'

describe('HeaderCard', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderCard, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
