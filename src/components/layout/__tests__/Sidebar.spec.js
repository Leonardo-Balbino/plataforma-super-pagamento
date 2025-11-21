import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Sidebar from '../Sidebar.vue'

describe('Sidebar', () => {
  it('deve renderizar o componente', () => {
    const wrapper = mount(Sidebar)
    expect(wrapper.exists()).toBe(true)
  })

  it('deve conter as seções de menu principais', () => {
    const wrapper = mount(Sidebar)
    const html = wrapper.text()
    
    // Verifica se os títulos das seções existem no menu
    expect(html).toContain('MENU')
    expect(html).toContain('GERAL')
  })

  it('deve conter o item ativo "Dashboard"', () => {
    const wrapper = mount(Sidebar)
    expect(wrapper.text()).toContain('Dashboard')
  })

  it('deve exibir o botão de "Super Cartão Pré-Pago"', () => {
    const wrapper = mount(Sidebar)
    
    // CORREÇÃO: Em vez de pegar o primeiro botão (.find), pegamos todos (.findAll)
    // e procuramos aquele que contém o texto específico.
    const buttons = wrapper.findAll('button')
    const cartaoButton = buttons.find(btn => btn.text().includes('Super Cartão Pré-Pago'))
    
    // Verifica se o botão foi encontrado
    expect(cartaoButton).toBeDefined()
    expect(cartaoButton?.exists()).toBe(true)
  })
})