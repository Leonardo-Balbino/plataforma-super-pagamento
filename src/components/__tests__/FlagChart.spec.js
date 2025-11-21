import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FlagChart from '../FlagChart.vue'

describe('FlagChart', () => {
  const mockData = [
    { nome: 'Visa', height: 50, icon: '<svg>Visa</svg>' },
    { nome: 'Mastercard', height: 80, icon: '<svg>Master</svg>' }
  ]

  it('deve renderizar a lista de bandeiras', () => {
    const wrapper = mount(FlagChart, {
      props: {
        data: mockData
      }
    })
    // Procura pelas colunas renderizadas
    const columns = wrapper.findAll('.group')
    expect(columns.length).toBe(2)
  })

  it('deve renderizar o ícone SVG injetado via v-html', () => {
    const wrapper = mount(FlagChart, {
      props: {
        data: mockData
      }
    })
    // Verifica se o HTML do ícone foi renderizado
    expect(wrapper.html()).toContain('<svg>Visa</svg>')
  })

  it('deve aplicar a altura correta na barra', () => {
    const wrapper = mount(FlagChart, {
      props: {
        data: mockData
      }
    })
    // Pega o estilo da primeira barra para ver se height é 50%
    const firstBar = wrapper.find('.rounded-full.bg-\\[\\#0641FC\\]')
    expect(firstBar.attributes('style')).toContain('height: 50%')
  })
})