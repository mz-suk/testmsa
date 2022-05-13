import Head from 'next/head'
import config from '@libs/docs/meta.json'

export const DefaultHead = ({ title, description, children }) => (
  <Head>
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
    {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
    <title key="title">{title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}</title>
    <meta key="description" name="description" content={description || config.description} />
    <link rel="shortcut icon" href="/favicon.ico" />
    {children}
  </Head>
)
