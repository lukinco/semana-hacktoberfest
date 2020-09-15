import Head from 'next/head'

const HeadComponent = () => {
  return (
    <Head>
      <title>Semana Hacktoberfest - Lukin Co.</title>

      <meta name='description' content='' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      <meta name='theme-color' content='#000000' />
      <meta name='application-name' content='Semana Hacktoberfest' />

      <meta property='og:url' content='https://hacktoberfest.lukin.co' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Educaly' />
      <meta property='og:image' content='https://hacktoberfest.lukin.co/logo-vertical.png' />
      <meta property='og:image:alt' content='' />
      <meta property='og:description' content='' />
      <meta property='og:locale' content='pt_BR' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@site_account' />
      <meta name='twitter:url' content='https://hacktoberfest.lukin.co/' />
      <meta name='twitter:title' content='Semana Hacktoberfest' />
      <meta name='twitter:description' content='' />
      <meta name='twitter:image' content='https://hacktoberfest.lukin.co/logo-vertical.png' />
      <meta name='twitter:image:alt' content='' />

      <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />

      <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/manifest.json' />

      <link rel='icon' href='/favicon.ico' />
      <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap' rel='stylesheet' />
    </Head>
  )
}

export { HeadComponent }
