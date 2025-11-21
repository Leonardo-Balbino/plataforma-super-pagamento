import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MobileHeader from '../MobileHeader.vue'

describe('MobileHeader', () => {
  it('deve renderizar o componente corretamente', () => {
    const wrapper = mount(MobileHeader)
    expect(wrapper.exists()).toBe(true)
  })

  it('deve exibir o título "Faturamento"', () => {
    const wrapper = mount(MobileHeader)
    expect(wrapper.text()).toContain('Faturamento')
  })

  it('deve formatar o valor do faturamento corretamente para BRL', () => {
    const wrapper = mount(MobileHeader, {
      props: {
        faturamento: 1250.50
      }
    })
    
    // O texto exato depende do locale do ambiente de teste, mas geralmente contém os números
    // Verifica se renderizou o valor formatado (pode variar o espaço nbsp, então usamos regex simples)
    const text = wrapper.text()
    expect(text).toContain('1.250,50')
    expect(text).toContain('R$')
  })

  it('deve mostrar R$ 0,00 se nenhum faturamento for passado', () => {
    const wrapper = mount(MobileHeader)
    expect(wrapper.text()).toContain('0,00')
  })
})