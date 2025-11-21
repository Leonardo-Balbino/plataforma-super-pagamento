// Mock data service para simular API
export default {
  async getDashboardData() {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return {
      faturamento: {
        total: 1060551.14,
        crescimento: 23.9,
        recebido: 245340.90,
        previsto: 815210.24,
        vendasPendentes: 15332.18,
        ticketMedio: 192.30,
        numeroCobrancas: 12349
      },
      transferenciaPendente: {
        valor: 29119.13,
        ativo: true
      },
      statusTransacoes: [
        {
          tipo: 'Reembolsos',
          valor: 8260.10,
          quantidade: 233,
          percentual: 4.5
        },
        {
          tipo: 'Chargebacks',
          valor: 1260.10,
          quantidade: 5,
          percentual: 0.3
        },
        {
          tipo: 'Cancelados',
          valor: 3120.60,
          quantidade: 32,
          percentual: 1.5
        },
        {
          tipo: 'Não autorizado',
          valor: 6120.60,
          quantidade: 122,
          percentual: 3.1
        }
      ],
      conversaoModalidade: [
        {
          tipo: 'Crédito',
          percentual: 92,
          cor: '#0641FC'
        },
        {
          tipo: 'Débito',
          percentual: 95,
          cor: '#852DF6'
        },
        {
          tipo: 'Boleto',
          percentual: 42,
          cor: '#B882FE'
        },
        {
          tipo: 'Pix',
          percentual: 98,
          cor: '#9DB5FF'
        }
      ],
      graficoDiario: [
        { dia: 1, valor: 45000 },
        { dia: 2, valor: 52000 },
        { dia: 3, valor: 48000 },
        { dia: 4, valor: 61000 },
        { dia: 5, valor: 55000 },
        { dia: 6, valor: 180000 },
        { dia: 7, valor: 195000 },
        { dia: 8, valor: 120000 },
        { dia: 9, valor: 98000 },
        { dia: 10, valor: 110000 },
        { dia: 11, valor: 125000 },
        { dia: 12, valor: 140000 },
        { dia: 13, valor: 130000 },
        { dia: 14, valor: 150000 },
        { dia: 15, valor: 190000 },
        { dia: 16, valor: 200000 },
        { dia: 17, valor: 160000 },
        { dia: 18, valor: 145000 },
        { dia: 19, valor: 135000 },
        { dia: 20, valor: 155000 },
        { dia: 21, valor: 170000 },
        { dia: 22, valor: 165000 },
        { dia: 23, valor: 175000 },
        { dia: 24, valor: 180000 },
        { dia: 25, valor: 190000 },
        { dia: 26, valor: 185000 },
        { dia: 27, valor: 195000 },
        { dia: 28, valor: 200000 },
        { dia: 29, valor: 195000 },
        { dia: 30, valor: 210000 },
        { dia: 31, valor: 205000 }
      ]
    }
  }
}

