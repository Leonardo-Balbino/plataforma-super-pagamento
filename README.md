# Plataforma - Super Pagamentos

Desenvolvido por **Leonardo Vinicius Balbino**.

## 🚀 Tecnologias

- Vue.js 3 (Composition API com `<script setup>`)
- Tailwind CSS (Estilização fiel ao Figma)
- Vue Router (Navegação)
- Pinia (Gerenciamento de estado)
- Axios (Services Pattern)
- Cypress (Testes E2E)
- Vitest (Testes unitários)

## 📁 Estrutura do Projeto

```
src/
├── assets/        # Imagens e CSS global
├── components/    # Componentes reutilizáveis
│   ├── layout/   # Sidebar, MobileHeader, BottomNav
│   ├── BarChart.vue
│   └── DonutChart.vue
├── services/      # Lógica de API (Dados mockados)
│   └── DashboardService.js
├── views/         # Páginas principais
│   └── DashboardHome.vue
├── stores/        # Pinia stores
├── router/        # Configuração de rotas
└── App.vue
```

## ⚙️ Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```
http://localhost:5173
```

4. Rode os testes :


```bash
npm run test:unit
```

```bash
npm run test:e2e
```

## 🎨 Características

- **Responsividade Extrema**: Layout adaptado para desktop e mobile
- **Desktop**: Sidebar lateral fixa + Header superior + conteúdo em fundo cinza claro
- **Mobile**: Header azul com saldo destacado + Bottom Navigation Bar com botão flutuante central
- **Fidelidade ao Design**: Componentes criados seguindo fielmente o design do Figma
- **Services Pattern**: Separação de lógica de dados usando Services
- **Componentização**: Código organizado em componentes reutilizáveis

## 📱 Breakpoints

- Mobile: `< 1024px` (lg breakpoint do Tailwind)
- Desktop: `>= 1024px`

## 🎯 Funcionalidades Implementadas

- ✅ Dashboard com métricas de faturamento
- ✅ Gráfico de barras diário
- ✅ Cards de status de transações
- ✅ Gráficos de conversão por modalidade (Donut Charts)
- ✅ Card de transferência pendente
- ✅ Sidebar de navegação (desktop)
- ✅ Header mobile com informações de conta
- ✅ Bottom Navigation Bar (mobile)
- ✅ Layout responsivo completo

## 🔧 Configuração do Tailwind

As cores principais foram configuradas no `tailwind.config.js`:



## 📝 Notas

- Os dados são mockados através do `DashboardService.js`
- O projeto não utiliza TypeScript (conforme requisito)
- Todos os componentes utilizam Composition API com `<script setup>`

