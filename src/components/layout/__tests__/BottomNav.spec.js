import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BottomNav from '../BottomNav.vue'

describe('BottomNav', () => {
  it('deve renderizar apenas em telas mobile (verificação de classes)', () => {
    const wrapper = mount(BottomNav)
    
    // Verifica se a classe que esconde em desktop está presente
    expect(wrapper.classes()).toContain('lg:hidden')
  })

  it('deve conter os botões principais', () => {
    const wrapper = mount(BottomNav)
    const text = wrapper.text()
    
    expect(text).toContain('Simule')
    expect(text).toContain('Cobranças')
    expect(text).toContain('Carteira')
    expect(text).toContain('Menu')
  })

  it('deve ter o botão central flutuante (FAB)', () => {
    const wrapper = mount(BottomNav)
    // O botão do meio geralmente tem uma cor de fundo específica ou posição absoluta
    // Vamos buscar pelo botão que tem a classe de cor azul
    const fab = wrapper.find('.bg-\\[\\#0641FC\\]') 
    expect(fab.exists()).toBe(true)
  })
})