export const navigation = [
  { href: '/', isActive: false, label: 'Home' },
  { href: '/about', isActive: false, label: 'About' },
  { href: '/cv', isActive: false, label: 'Curriculum' },
  { href: '/clipping', isActive: false, label: 'Clipping' },
  { href: '/terms', isActive: false, label: 'Terms' },
  { href: '/privacy', isActive: false, label: 'Privacy' },
  { href: '/contact', isActive: false, label: 'Contact' },
];

export const categories = ['Todas', 'Lorem', 'Ipsum', 'Dolor', 'Amet', 'Elit'];

const detailLayouts = ['hero', 'split-right'];
const palettes = ['sun', 'sand', 'clay', 'ink', 'moss', 'mist', 'charcoal', 'rose', 'ochre', 'forest', 'ash', 'copper'];

const worksSeed = [
  ['Lorem Ipsum', 'Lorem', 'landscape'],
  ['Dolor Sit', 'Dolor', 'portrait'],
  ['Amet Elit', 'Ipsum', 'landscape'],
  ['Consectetur', 'Amet', 'portrait'],
  ['Adipiscing', 'Lorem', 'landscape'],
  ['Tempor Incididunt', 'Dolor', 'square'],
  ['Ut Labore', 'Ipsum', 'portrait'],
  ['Et Dolore', 'Amet', 'landscape'],
  ['Magna Aliqua', 'Lorem', 'landscape'],
  ['Ut Enim', 'Elit', 'portrait'],
  ['Ad Minim', 'Ipsum', 'landscape'],
  ['Veniam Quis', 'Elit', 'portrait'],
  ['Nostrud Exercitation', 'Lorem', 'portrait'],
  ['Ullamco Laboris', 'Dolor', 'landscape'],
  ['Nisi Ut', 'Ipsum', 'square'],
  ['Aliquip Ex', 'Amet', 'portrait'],
  ['Ea Commodo', 'Lorem', 'landscape'],
  ['Consequat Duis', 'Elit', 'portrait'],
  ['Aute Irure', 'Ipsum', 'portrait'],
  ['Dolor In', 'Amet', 'landscape'],
  ['Reprehenderit', 'Lorem', 'square'],
  ['Voluptate Velit', 'Dolor', 'portrait'],
  ['Esse Cillum', 'Elit', 'landscape'],
  ['Fugiat Nulla', 'Ipsum', 'landscape'],
];

export const featuredWorks = worksSeed.map(([title, category, size], index) => {
  const id = index + 1;

  return {
    id,
    slug: `work-${id}`,
    title,
    category,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    size,
    palette: palettes[index % palettes.length],
    detailLayout: detailLayouts[index % detailLayouts.length],
    detail: {
      year: '2026',
      medium: 'Lorem ipsum dolor sit amet',
      dimensions: '120 x 180 cm',
      location: 'Lorem Ipsum Studio',
      heroEyebrow: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      narrative:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      notes: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      ],
      relatedIds: [
        ((id + 1 - 1) % worksSeed.length) + 1,
        ((id + 2 - 1) % worksSeed.length) + 1,
        ((id + 3 - 1) % worksSeed.length) + 1,
        ((id + 4 - 1) % worksSeed.length) + 1,
      ],
    },
  };
});

export function getWorkBySlug(slug) {
  return featuredWorks.find((work) => work.slug === slug);
}

export function getRelatedWorks(work) {
  if (!work) {
    return [];
  }

  return work.detail.relatedIds
    .map((relatedId) => featuredWorks.find((candidate) => candidate.id === relatedId))
    .filter(Boolean);
}

export const portfolioContent = {
  breadcrumbs: ['Lorem', 'Ipsum'],
  brand: 'Lorem Ipsum',
  categoriesHeading: 'Lorem Ipsum',
  contactHref: 'mailto:lorem@ipsum.test',
  contactLabel: 'lorem@ipsum.test',
  detailBackLabel: 'Lorem Ipsum',
  detailMetaTitle: 'Lorem Ipsum',
  loadMoreIdleLabel: 'Lorem ipsum dolor sit amet',
  loadMoreLoadingLabel: 'Lorem ipsum dolor sit amet...',
  mobileCategoryLabel: 'Lorem ipsum dolor sit amet.',
  pageTitle: 'Lorem Ipsum',
  phoneHref: 'tel:+5511999999999',
  phoneLabel: 'Lorem ipsum dolor',
  relatedTitle: 'Lorem Ipsum Dolor',
  contactModal: {
    closeLabel: 'Lorem Ipsum',
    contactItems: [
      { label: 'Lorem', value: 'lorem@ipsum.test' },
      { label: 'Ipsum', value: '+55 11 99999 9999' },
      { label: 'Dolor', value: 'Lorem Ipsum Studio' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    form: {
      emailPlaceholder: 'Lorem ipsum',
      messagePlaceholder: 'Lorem ipsum dolor sit amet',
      namePlaceholder: 'Lorem ipsum dolor',
      submitLabel: 'Lorem Ipsum',
      title: 'Lorem Ipsum',
    },
    socials: [
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'Behance' },
      { href: '#', label: 'LinkedIn' },
      { href: '#', label: 'Are.na' },
    ],
    title: 'Lorem Ipsum Dolor Sit Amet',
  },
};

export const cvContent = {
  intro:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  pageTitle: 'Curriculum Vitae',
  sections: [
    {
      id: 'solo-exhibitions',
      title: 'Exposicoes Individuais',
      entries: [
        {
          meta: '2026 · Sao Paulo',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          meta: '2025 · Lisboa',
          text: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
          meta: '2024 · Porto',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
        },
      ],
    },
    {
      id: 'group-exhibitions',
      title: 'Exposicoes Coletivas',
      entries: [
        {
          meta: '2026 · Rio de Janeiro',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          meta: '2025 · Madrid',
          text: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
          meta: '2024 · Berlin',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
        },
      ],
    },
    {
      id: 'awards',
      title: 'Premios e Distincoes',
      entries: [
        {
          meta: '2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          meta: '2025',
          text: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
      ],
    },
    {
      id: 'residencies',
      title: 'Residencias',
      entries: [
        {
          meta: '2026 · Porto',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          meta: '2024 · Buenos Aires',
          text: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
      ],
    },
    {
      id: 'publications',
      title: 'Publicacoes',
      entries: [
        {
          meta: '2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          meta: '2025',
          text: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
      ],
    },
    {
      id: 'collections',
      title: 'Colecoes',
      entries: [
        {
          meta: 'Brasil',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
          meta: 'Portugal',
          text: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
      ],
    },
  ],
};

export const aboutContent = {
  blocks: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      title: 'Lorem Ipsum',
    },
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      title: 'Dolor Sit Amet',
    },
    {
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      title: 'Consectetur Adipiscing',
    },
  ],
  intro:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  meta: [
    { label: 'Lorem', value: 'Sao Paulo, Brasil' },
    { label: 'Ipsum', value: 'Atelier Aurora' },
    { label: 'Dolor', value: 'Visual Arts, Installation, Painting' },
  ],
  pageTitle: 'About',
};

export const clippingContent = {
  intro:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  items: [
    {
      date: '2026',
      outlet: 'Lorem Ipsum Magazine',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'Lorem Ipsum Dolor Sit Amet',
    },
    {
      date: '2025',
      outlet: 'Dolor Journal',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: 'Consectetur Adipiscing Elit',
    },
    {
      date: '2025',
      outlet: 'Sit Amet Review',
      summary:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      title: 'Sed Do Eiusmod Tempor',
    },
    {
      date: '2024',
      outlet: 'Amet Press',
      summary:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title: 'Ut Labore Et Dolore',
    },
    {
      date: '2024',
      outlet: 'Consectetur Weekly',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      title: 'Magna Aliqua Enim',
    },
  ],
  pageTitle: 'Clipping',
};

export const legalPagesContent = {
  privacy: {
    intro:
      'Este texto e um modelo inicial de politica de privacidade com foco em LGPD. Antes de publicacao, o conteudo deve ser revisado por assessoria juridica e adaptado aos fluxos reais de coleta e tratamento de dados.',
    pageTitle: 'Politica de Privacidade e LGPD',
    sections: [
      {
        entries: [
          'Esta politica descreve como dados pessoais podem ser coletados, utilizados, armazenados e protegidos no uso deste site.',
          'Ao navegar no site ou enviar informacoes por formularios, o usuario declara estar ciente das praticas aqui descritas, observadas as exigencias da legislacao aplicavel.',
          'Em caso de divergencia entre esta versao modelo e a operacao real do site, prevalecera a necessidade de ajuste documental especifico antes da publicacao.',
        ],
        title: '1. Escopo',
      },
      {
        entries: [
          'Para fins desta politica, consideram-se dados pessoais as informacoes relacionadas a pessoa natural identificada ou identificavel.',
          'Tambem se considera tratamento toda operacao realizada com dados pessoais, como coleta, producao, recepcao, classificacao, utilizacao, acesso, armazenamento, compartilhamento, eliminacao e demais atos previstos na LGPD.',
        ],
        title: '2. Definicoes Relevantes',
      },
      {
        entries: [
          'Podem ser coletados dados fornecidos diretamente pelo usuario, como nome, e-mail, telefone, mensagem enviada e outras informacoes inseridas em formularios.',
          'Tambem podem ser coletados dados tecnicos de navegacao, como endereco IP, tipo de dispositivo, navegador, paginas acessadas e horarios de acesso.',
          'Dependendo da configuracao tecnica do site, podera haver coleta indireta por ferramentas de analytics, formulários, provedores de hospedagem, recursos embarcados ou plataformas de comunicacao.',
        ],
        title: '3. Dados Coletados',
      },
      {
        entries: [
          'Os dados podem ser utilizados para responder contatos, enviar informacoes solicitadas, administrar o site, melhorar a experiencia de navegacao e cumprir obrigacoes legais.',
          'Os dados nao serao utilizados para finalidades incompatíveis com aquelas informadas ao titular, salvo mediante nova base legal aplicavel.',
          'Quando houver comunicacoes institucionais ou comerciais, elas deverao observar a base legal adequada e a expectativa razoavel do titular.',
        ],
        title: '4. Finalidades do Tratamento',
      },
      {
        entries: [
          'O tratamento de dados pessoais podera se basear no consentimento do titular, na execucao de procedimentos preliminares relacionados a contato ou contratacao, no cumprimento de obrigacao legal ou em legitimo interesse, quando cabivel.',
          'Sempre que o consentimento for utilizado como fundamento, o titular podera revoga-lo nos termos da legislacao aplicavel, sem comprometer a licitude do tratamento realizado anteriormente.',
        ],
        title: '5. Bases Legais',
      },
      {
        entries: [
          'Os dados poderao ser compartilhados com fornecedores de hospedagem, e-mail, analytics, automacao ou suporte tecnico, desde que observadas medidas adequadas de seguranca e confidencialidade.',
          'Os dados tambem poderao ser compartilhados quando houver obrigacao legal, ordem de autoridade competente ou necessidade de exercicio regular de direitos.',
          'Quando houver transferencia internacional de dados, ela devera observar os mecanismos juridicos e salvaguardas previstos na legislacao aplicavel.',
        ],
        title: '6. Compartilhamento',
      },
      {
        entries: [
          'Os dados serao mantidos apenas pelo tempo necessario para cumprir as finalidades informadas, atender obrigacoes legais ou resguardar direitos.',
          'Apos o encerramento do tratamento, os dados poderao ser eliminados, anonimizados ou mantidos quando houver fundamento legal para retencao.',
          'Os prazos de retencao podem variar conforme a natureza do dado, a finalidade do tratamento, o ciclo contratual, a obrigacao legal e a necessidade de defesa em processos administrativos, arbitrais ou judiciais.',
        ],
        title: '7. Retencao e Descarte',
      },
      {
        entries: [
          'O titular pode solicitar confirmacao da existencia de tratamento, acesso, correcao, anonimização, bloqueio, eliminacao, portabilidade, informacao sobre compartilhamento e revogacao de consentimento, nos termos da LGPD.',
          'As solicitacoes podem ser encaminhadas pelos canais de contato informados nesta pagina institucional.',
          'As respostas serao fornecidas dentro dos prazos e limites legais, observadas a viabilidade tecnica, a necessidade de verificacao de identidade e as hipoteses de retencao ou sigilo previstas em lei.',
        ],
        title: '8. Direitos do Titular',
      },
      {
        entries: [
          'Sao adotadas medidas tecnicas e organizacionais razoaveis para proteger os dados pessoais contra acessos nao autorizados, perda, alteracao ou divulgacao indevida.',
          'Apesar disso, nenhum ambiente digital e completamente isento de riscos, de modo que nao se pode garantir seguranca absoluta.',
          'Em caso de incidente de seguranca com risco ou dano relevante aos titulares, poderao ser adotadas as providencias exigidas pela legislacao aplicavel e pela autoridade competente.',
        ],
        title: '9. Seguranca da Informacao',
      },
      {
        entries: [
          'Este site pode utilizar cookies e tecnologias semelhantes para funcionamento, analise de uso, seguranca e melhoria da experiencia.',
          'Quando aplicavel, o usuario podera gerenciar preferencias de cookies por mecanismos disponibilizados no proprio site ou no navegador.',
          'A desativacao de determinados cookies pode impactar funcionalidades, desempenho ou personalizacao de alguns recursos.',
        ],
        title: '10. Cookies',
      },
      {
        entries: [
          'O site pode conter links para paginas, ferramentas ou plataformas de terceiros, que possuem politicas proprias de privacidade e tratamento de dados.',
          'Nao ha controle sobre as praticas de terceiros, razao pela qual se recomenda a leitura das politicas aplicaveis antes da utilizacao desses ambientes externos.',
        ],
        title: '11. Servicos e Ambientes de Terceiros',
      },
      {
        entries: [
          'As demandas relacionadas a privacidade e protecao de dados podem ser encaminhadas pelos canais de contato institucionais disponibilizados neste site.',
          'Quando aplicavel, o controlador podera indicar responsavel ou canal especifico para atendimento de titulares e interlocucao sobre dados pessoais.',
        ],
        title: '12. Contato e Exercício de Direitos',
      },
      {
        entries: [
          'Esta politica pode ser atualizada periodicamente para refletir alteracoes operacionais, normativas ou tecnicas.',
          'A versao vigente sera sempre a publicada nesta pagina, acompanhada da data de ultima atualizacao.',
        ],
        title: '13. Atualizacoes',
      },
    ],
    updatedAt: 'Ultima atualizacao: 18 de maio de 2026',
  },
  terms: {
    intro:
      'Este texto e um modelo inicial de termos de uso para site institucional. Antes de publicacao, o conteudo deve ser revisado juridicamente e adequado aos servicos efetivamente oferecidos.',
    pageTitle: 'Termos de Uso',
    sections: [
      {
        entries: [
          'Ao acessar e utilizar este site, o usuario concorda com estes Termos de Uso e com a Politica de Privacidade vigente.',
          'Caso nao concorde com qualquer disposicao, o usuario deve interromper a navegacao e o uso das funcionalidades disponibilizadas.',
          'Estes termos constituem um instrumento de referencia institucional e devem ser ajustados conforme a realidade operacional e contratual do projeto antes de sua publicacao definitiva.',
        ],
        title: '1. Aceitacao',
      },
      {
        entries: [
          'Para fins destes termos, considera-se usuario toda pessoa que acessa, navega, interage com conteudos, envia formularios ou utiliza recursos disponibilizados neste site.',
          'Consideram-se conteudos do site os textos, imagens, arquivos, marcas, sinais distintivos, estruturas visuais, interfaces, materiais editoriais e demais elementos disponibilizados em qualquer formato.',
        ],
        title: '2. Definicoes',
      },
      {
        entries: [
          'O site possui finalidade institucional e informativa, podendo tambem disponibilizar formularios de contato, portfolio, clipping, curriculo artistico e demais materiais relacionados a atividade do artista ou estudio.',
          'O conteudo publicado nao constitui, por si so, oferta vinculante, promessa de contratacao ou prestacao automatica de servicos, salvo quando expressamente indicado.',
        ],
        title: '3. Finalidade do Site',
      },
      {
        entries: [
          'O usuario compromete-se a utilizar o site de forma licita, etica e compativel com sua finalidade, abstendo-se de praticar condutas que possam comprometer o funcionamento do ambiente, violar direitos de terceiros ou explorar indevidamente seus conteudos.',
          'E vedado empregar mecanismos automatizados para raspagem, sobrecarga, varredura indevida, engenharia reversa, interferencia em seguranca ou qualquer uso abusivo da infraestrutura.',
        ],
        title: '4. Uso Permitido',
      },
      {
        entries: [
          'Todos os textos, imagens, marcas, grafismos, videos, layouts e demais conteudos disponibilizados neste site sao protegidos pela legislacao aplicavel e pertencem aos respectivos titulares.',
          'Salvo autorizacao expressa, nao e permitido reproduzir, distribuir, modificar ou explorar comercialmente os conteudos do site.',
          'A eventual autorizacao de uso de determinado material nao implica cessao ampla, exclusiva ou definitiva de direitos, devendo sempre observar os limites fixados pelo titular.',
        ],
        title: '5. Propriedade Intelectual',
      },
      {
        entries: [
          'O site podera conter links para plataformas e servicos de terceiros. A existencia desses links nao implica endosso, controle ou responsabilidade sobre seus conteudos, politicas ou praticas.',
          'A navegacao em ambientes externos ocorrera por conta e risco do usuario, que devera analisar os respectivos termos de uso, politicas de privacidade e condicoes de seguranca.',
        ],
        title: '6. Links Externos',
      },
      {
        entries: [
          'As informacoes apresentadas podem ser alteradas, atualizadas ou removidas a qualquer momento, sem aviso previo.',
          'Nao ha garantia de disponibilidade ininterrupta do site, de ausencia de falhas ou de adequacao a finalidades especificas do usuario.',
          'Os responsaveis pelo site poderao realizar manutencoes, ajustes visuais, alteracoes estruturais ou restricoes temporarias de acesso sempre que necessario.',
        ],
        title: '7. Disponibilidade e Isencao de Garantias',
      },
      {
        entries: [
          'Na extensao permitida pela legislacao aplicavel, os responsaveis pelo site nao responderao por danos indiretos, lucros cessantes ou prejuizos decorrentes de indisponibilidade, uso inadequado, falhas tecnicas ou decisoes tomadas com base nas informacoes disponibilizadas.',
          'Nada neste documento exclui responsabilidades que nao possam ser afastadas por lei, especialmente em materias que envolvam direitos indisponiveis ou normas de ordem publica.',
        ],
        title: '8. Limitacao de Responsabilidade',
      },
      {
        entries: [
          'O usuario e responsavel pelas informacoes enviadas por meio de formularios, declarando possuir legitimidade para compartilha-las e comprometendo-se a nao inserir dados falsos, ofensivos, ilicitos ou de terceiros sem base adequada.',
        ],
        title: '9. Informacoes Fornecidas pelo Usuario',
      },
      {
        entries: [
          'Estes termos podem ser modificados periodicamente para refletir mudancas operacionais, tecnicas ou legais. A continuidade de uso apos a atualizacao sera interpretada como ciencia da nova versao publicada.',
          'Sempre que relevante, a versao vigente podera indicar data de atualizacao para referencia do usuario.',
        ],
        title: '10. Alteracoes dos Termos',
      },
      {
        entries: [
          'As comunicacoes relacionadas ao uso do site podem ser realizadas pelos canais de contato disponibilizados na propria plataforma.',
          'Demandas especificas sobre protecao de dados, exercicio de direitos, licenciamento de conteudo ou uso institucional devem observar os canais adequados informados nas paginas correspondentes.',
        ],
        title: '11. Contato',
      },
      {
        entries: [
          'Este documento sera regido pelas leis da Republica Federativa do Brasil, observadas as normas aplicaveis, inclusive em materia de protecao de dados pessoais.',
          'Sempre que cabivel, as partes envidarao esforcos para resolver controvérsias de forma administrativa antes da adocao de medidas judiciais.',
        ],
        title: '12. Legislacao Aplicavel e Foro',
      },
    ],
    updatedAt: 'Ultima atualizacao: 18 de maio de 2026',
  },
};
