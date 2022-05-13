import React from 'react'
import { Messages, Database } from 'tabler-icons-react'
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core'
import Link from 'next/link'

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
  href: string
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  return (
    <Link href={href}>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  )
}

const data = [
  // { icon: <GitPullRequest size={16} />, color: 'blue', label: '1번 메뉴', href: '/ttt' },
  // { icon: <AlertCircle size={16} />, color: 'teal', label: '2번 메뉴', href: '/test' },
  { icon: <Messages size={16} />, color: 'violet', label: '1번 메뉴', href: '/wizadry' },
  { icon: <Database size={16} />, color: 'grape', label: '2번 메뉴 - stepper', href: '/stepper' },
]

export default function Navmenu() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />)
  return <div>{links}</div>
}
