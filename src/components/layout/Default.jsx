import { AppShell, Navbar, useMantineTheme } from '@mantine/core'
import { Navmenu } from '@components/common'
import Link from 'next/link'

export const DefaultLayout = ({ children }) => {
  const theme = useMantineTheme()

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          <Link href="/">
            <p>테스트 한글</p>
          </Link>
          <Navmenu />
        </Navbar>
      }
    >
      {children}
    </AppShell>
  )
}
