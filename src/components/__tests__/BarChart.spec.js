import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BarChart from '../BarChart.vue'

describe('BarChart', () => {
  // Mock básico de dados para o teste
  const mockData = [
    { dia: 1, valor: 1000 },
    { dia: 2, valor: 5000 },
    { dia: 3, valor: 2000 }
  ]

  it('deve renderizar sem erros', () => {
    const wrapper = mount(BarChart, {
      props: { data: [] }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('deve renderizar a quantidade correta de barras baseada nos dados', () => {
    const wrapper = mount(BarChart, {
      props: { data: mockData }
    })
    // Procura pelas divs que representam as colunas (tem a classe group)
    const bars = wrapper.findAll('.group')
    expect(bars.length).toBe(3)
  })

  it('deve exibir os dias no eixo X', () => {
    const wrapper = mount(BarChart, {
      props: { data: mockData }
    })
    expect(wrapper.text()).toContain('1')
    expect(wrapper.text()).toContain('2')
    expect(wrapper.text()).toContain('3')
  })

  it('deve formatar o tooltip com R$', async () => {
    const wrapper = mount(BarChart, {
      props: { data: mockData }
    })
    // Verifica se o texto formatado existe no DOM (mesmo que oculto por opacity-0)
    const html = wrapper.html()
    expect(html).toContain('R$')
    expect(html).toContain('5.000,00')
  })
})