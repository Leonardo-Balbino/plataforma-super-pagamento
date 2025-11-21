import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DonutChart from '../DonutChart.vue'

describe('DonutChart', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = mount(DonutChart, {
      props: {
        percentual: 75,
        cor: '#000000'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('deve exibir a porcentagem central corretamente', () => {
    const wrapper = mount(DonutChart, {
      props: {
        percentual: 42,
        cor: '#0641FC'
      }
    })
    expect(wrapper.text()).toBe('42%')
  })

  it('deve renderizar dois círculos SVG (fundo e progresso)', () => {
    const wrapper = mount(DonutChart, {
      props: {
        percentual: 50,
        cor: '#0641FC'
      }
    })
    const circles = wrapper.findAll('circle')
    expect(circles.length).toBe(2)
  })
})