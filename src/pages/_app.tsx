import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { DefaultLayout } from '@components/layout'
import { Head } from '@components/common'
import { MantineThemeOverride, MantineProvider } from '@mantine/core'

import '@assets/css/style.scss'

const myTheme: MantineThemeOverride = {
  // colorScheme: 'light',
  colorScheme: 'dark',
  white: '#f9f9f9',
  black: '#333',
  // fontFamily: 'sans-serif',
}

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).layout || DefaultLayout

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
}
