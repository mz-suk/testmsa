import { useForm, formList } from '@mantine/form'
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button, Code } from '@mantine/core'
import { Trash } from 'tabler-icons-react'

export default function One() {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: '', active: false },
        { name: '', active: false },
        { name: '', active: false },
      ]),
    },
  })

  const fields = form.values.employees.map((_, index) => (
    <Group key={index} mt="xs">
      <TextInput placeholder="John Doe" required sx={{ flex: 1 }} {...form.getListInputProps('employees', index, 'name')} />
      <Switch label="Active" {...form.getListInputProps('employees', index, 'active')} />
      <ActionIcon color="red" variant="hover" onClick={() => form.removeListItem('employees', index)}>
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ))

  return <Box mx="auto">{fields}</Box>
}
