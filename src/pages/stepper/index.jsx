import { useState } from 'react'
import { Stepper, Button, Group } from '@mantine/core'
import { OneStep, TwoStep } from '@components/stepper'

export default function Wizadry() {
  const [active, setActive] = useState(0)
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current))
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="1 step" description="Create an account" allowStepSelect={active > 0}>
          Step 1 content: Create an account
          <OneStep />
        </Stepper.Step>
        <Stepper.Step label="2 step" description="Verify email" allowStepSelect={active > 1}>
          Step 2 content: Verify email
          <TwoStep />
        </Stepper.Step>
        <Stepper.Step label="3 step" description="Get full access" allowStepSelect={active > 2}>
          Step 3 content: Get full access
          <OneStep />
        </Stepper.Step>
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  )
}
