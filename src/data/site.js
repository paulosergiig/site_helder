export const categories = [
  { title: 'Componentes eletrônicos', icon: 'CircuitBoard' },
  { title: 'Conectores', icon: 'Cable' },
  { title: 'Sensores', icon: 'RadioTower' },
  { title: 'Fontes e energia', icon: 'BatteryCharging' },
  { title: 'Automação industrial', icon: 'Bot' },
  { title: 'Equipamentos e ferramentas', icon: 'Factory' },
]

// O catálogo e as fotos finais ainda não foram fornecidos. Estes campos são
// neutros e existem somente para preservar a composição dos cards do layout.
export const featuredProducts = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  name: 'Produto em destaque',
  description: 'Informações em atualização',
}))

export const benefits = [
  { title: 'Entrega rápida', text: 'Agilidade e segurança na distribuição.', icon: 'Truck' },
  { title: 'Produtos originais', text: 'Componentes selecionados com qualidade.', icon: 'ShieldCheck' },
  { title: 'Suporte dedicado', text: 'Uma equipe pronta para ajudar.', icon: 'Headphones' },
  { title: 'Grande estoque', text: 'Variedade para diferentes projetos.', icon: 'Boxes' },
]

export const partners = ['DELTA', 'METALTEX', 'TRON']

export const steps = [
  { title: 'Solicite um orçamento', text: 'Conte para nossa equipe o que sua empresa precisa.', icon: 'ClipboardList' },
  { title: 'Nossa equipe analisa', text: 'Analisamos a necessidade e buscamos as melhores opções.', icon: 'Search' },
  { title: 'Receba sua proposta', text: 'Você recebe uma proposta adequada ao seu projeto.', icon: 'FileText' },
  { title: 'Entrega em toda cidade', text: 'Após a aprovação, sua entrega é preparada com segurança.', icon: 'Send' },
]

export const milestones = [
  { title: 'Fundação', text: 'O início de uma trajetória dedicada ao setor industrial.', icon: 'CalendarDays' },
  { title: 'Expansão', text: 'Novos relacionamentos e uma atuação cada vez mais completa.', icon: 'TrendingUp' },
  { title: 'Novas soluções', text: 'Ampliação do portfólio para acompanhar cada necessidade.', icon: 'Puzzle' },
  { title: 'Hoje', text: 'Experiência, proximidade e compromisso em cada atendimento.', icon: 'Handshake' },
]

export const values = [
  { title: 'Qualidade', text: 'Cuidado na seleção de cada solução.', icon: 'BadgeCheck' },
  { title: 'Experiência', text: 'Conhecimento aplicado a necessidades reais.', icon: 'BriefcaseBusiness' },
  { title: 'Atendimento', text: 'Proximidade em todas as etapas.', icon: 'Users' },
  { title: 'Soluções', text: 'Alternativas adequadas para cada empresa.', icon: 'Lightbulb' },
]
