export const categories = [
  { title: 'Componentes eletrônicos', icon: 'CircuitBoard' },
  { title: 'Conectores', icon: 'Cable' },
  { title: 'Sensores', icon: 'RadioTower' },
  { title: 'Fontes e energia', icon: 'BatteryCharging' },
  { title: 'Automação industrial', icon: 'Bot' },
  { title: 'Equipamentos e ferramentas', icon: 'Factory' },
]

export const featuredProducts = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  name: 'Nome do produto',
  description: 'Descrição',
}))

export const benefits = [
  { title: 'Entrega rápida', text: 'Agilidade e segurança para todo o Brasil.', icon: 'Truck' },
  { title: 'Produtos originais', text: 'Trabalhamos apenas com produtos de qualidade.', icon: 'ShieldCheck' },
  { title: 'Suporte dedicado', text: 'Nossa equipe está pronta para ajudar.', icon: 'Headphones' },
  { title: 'Grande estoque', text: 'Variedade e disponibilidade para seu projeto.', icon: 'Boxes' },
]

export const partners = ['DELTA', 'METALTEX', 'TRON']

export const steps = [
  { title: 'Solicite um orçamento', text: 'Preencha o formulário ou fale com nosso time.', icon: 'ClipboardList' },
  { title: 'Nossa equipe analisa', text: 'Analisamos sua necessidade e buscamos as melhores opções.', icon: 'Search' },
  { title: 'Receba sua proposta', text: 'Enviamos sua proposta com valores e condições.', icon: 'FileText' },
  { title: 'Entrega em todo Brasil', text: 'Após a aprovação, realizamos a entrega com segurança.', icon: 'Send' },
]
