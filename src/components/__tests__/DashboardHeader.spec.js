import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardHeader from '../DashboardHeader.vue'

describe('DashboardHeader', () => {
  it('deve renderizar apenas em desktop (classe hidden lg:block)', () => {
    const wrapper = mount(DashboardHeader)
    // Procura o elemento <header> especificamente para verificar as classes raiz
    const header = wrapper.find('header')
    
    // Verifica se o header existe
    expect(header.exists()).toBe(true)
    
    // Verifica as classes de responsividade
    expect(header.classes()).toContain('hidden')
    expect(header.classes()).toContain('lg:block')
  })

  it('deve exibir o título "Super central de gestão"', () => {
    const wrapper = mount(DashboardHeader)
    expect(wrapper.text()).toContain('Super central de gestão')
  })

  it('deve exibir as informações da empresa', () => {
    const wrapper = mount(DashboardHeader)
    const text = wrapper.text()
    
    expect(text).toContain('Empresarial')
    expect(text).toContain('Astra Pagamentos')
    // Verifica as iniciais no avatar
    expect(text).toContain('AP')
  })
})