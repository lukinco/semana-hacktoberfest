import {
  TelegramIcon as Telegram,
  GithubIcon as Github,
} from 'ui'

const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

export const menu = [
  {
    id: generateId(),
    title: 'O que é?',
    url: '#sobre',
  },
  {
    id: generateId(),
    title: 'Como participar',
    url: '#como-participar',
  },
  {
    id: generateId(),
    title: 'Contribua',
    url: '#contribua',
  },
  {
    id: generateId(),
    title: 'Acompanhe',
    url: '#acompanhe',
  },
  {
    id: generateId(),
    title: 'Conheça a Lukin Co.',
    url: 'https://lukin.co',
  },
]

export const hero = {
  title: 'Semana Hacktoberfest na Lukin Co.',
  text: 'Quer participar da Hacktoberfest mas não sabe por onde começar? A Lukin preparou um guia especial para você!',
  cta: 'Saiba mais',
  ctaUrl: '#sobre',
  alt: 'A ilustração mostra uma pessoa vestida de rosa, usando um laptop com o logotipo da Lukin. Ao fundo um quadro branco com linhas coloridas intercalando as cores rosa e amarelo.',
}

export const about = [
  {
    id: 'sobre',
    invert: false,
    title: 'O que é?',
    text: 'O [[hacktoberfest]] é um mês de celebração open source criado pela [[digitalocean]] em parceria com o [[github]]. Hacktoberfest é aberto a comunidade global e o objetivo é fomentar e incentivar a comunidade a contribuir com projetos de código aberto. Ao completar o desafio proposto, você ainda pode ganhar brindes exclusivos do evento (como uma Camiseta e adesivos da DO e GitHub). O evento inicia em 1 de Outubro e termina em 31 de Outubro.',
  },
  {
    id: 'como-participar',
    invert: true,
    title: 'Como participar',
    text: 'Para ajudar você que quer participar do Hacktoberfest mas não sabe por onde começar, nós da Lukin preparamos uma série de vídeos de como contribuir em projetos open source utilizando Git e Github. Acompanhe essa série de videos produzida pelo [[fdaciuk]]',
  },
]

export const playlist = {
  title: 'Playlist de vídeos',
  items: [
    {
      id: generateId(),
      title: '#00 - Live de apresentação da semana',
      videoId: '96vWdmGFn9U',
    },
    {
      id: generateId(),
      title: '#01 - Conhecendo o GitHub e criando seu primeiro repo',
      videoId: 'bjFLNE2AlYo',
    },
    {
      id: generateId(),
      title: '#02 - Desvendando o repositório',
      videoId: 'Le8BxN4ZCtQ',
    },
    {
      id: generateId(),
      title: '#03 - Como contribuir com projetos open source',
      videoId: null,
    },
    {
      id: generateId(),
      title: '#04 - Live de Conclusão da semana',
      videoId: null,
    },
  ],
}

export const issueList = {
  title: 'Onde contribuir?',
  text: 'Para facilitar o inicio da sua jornada open source, a Lukin selecionou uma lista de issues de projetos open source, com diversos níveis, de [[beginner]] a [[advanced]].  Assim que começar a Hacktoberfest, nós iremos disponibilizar aqui as issues e nosso projetos para você contribuir.',
  items: [
    {
      id: generateId(),
      repo: 'lukin/timerlab',
      position: '#04',
      title: 'Notification and sound alert',
      description: 'This app is very useful maybe local notification and sound alert after finish run time is more useful.',
      stars: 100,
      lang: 'ReScript',
      url: 'https://lukin.co',
    },
    {
      id: generateId(),
      repo: 'lukin/timerlab',
      position: '#04',
      title: 'Notification and sound alert',
      description: 'This app is very useful maybe local notification and sound alert after finish run time is more useful.',
      stars: 100,
      lang: 'ReScript',
      url: 'https://lukin.co',
    },
    {
      id: generateId(),
      repo: 'lukin/timerlab',
      position: '#04',
      title: 'Notification and sound alert',
      description: 'This app is very useful maybe local notification and sound alert after finish run time is more useful.',
      stars: 100,
      lang: 'Javascript',
      url: 'https://lukin.co',
    },
    {
      id: generateId(),
      repo: 'lukin/timerlab',
      position: '#04',
      title: 'Notification and sound alert',
      description: 'This app is very useful maybe local notification and sound alert after finish run time is more useful.',
      stars: 100,
      lang: 'ReScript',
      url: 'https://lukin.co',
    },
  ],
}

export const social = [
  {
    icon: './social-github.svg',
    url: 'https://github.com/lukinco',
  },
  {
    icon: './social-twitter.svg',
    url: 'https://twitter.com/lukin_co',
  },
  {
    icon: './social-instagram.svg',
    url: 'https://instagram.com/lukinco',
  },
]

export const followUp = {
  title: 'Acompanhe',
  text: 'Quer ficar por dentro de tudo que vai rolar na Semana Hacktoberfest da Lukin Co? Para facilitar isso, nós vamos disponibilizar um canal no Telegram para comunicar qualquer novidade sobre a Hacktoberfest. Além disso, nós deixamos o código deste site aberto no GitHub e você pode através das issues, enviar sugestões, dúvidas ou até mesmo reportar algum erro no nosso site.',
  cards: [
    {
      id: 'telegram',
      text: 'Canal no Telegram para novidades',
      cta: 'Quero participar',
      ctaUrl: 'https://t.me/semana_hacktoberfest',
      icon: Telegram,
    },
    {
      id: 'github',
      text: 'Repositório do site para dúvidas ou sugestões',
      cta: 'Ver repositório',
      ctaUrl: 'https://github.com/lukinco/semana-hacktoberfest',
      icon: Github,
    },
  ],
}
