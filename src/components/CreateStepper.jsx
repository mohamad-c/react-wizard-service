import React, { useContext } from "react";
import { Button, Group, Card, Timeline } from "@mantine/core";
import { StepperContext } from "../context/StepperContext";
import StepperChild from "./StepperChild";

const CreateStepper = () => {
  const { active, nextStep, prevStep } = useContext(StepperContext);
  return (
    <>
      <Card withBorder shadow="md" radius="md">
        <Timeline active={active} bulletSize={24} lineWidth={2}>
          <Timeline.Item title="New branch">
            <StepperChild id={0} title="first step">Hi mom</StepperChild>
          </Timeline.Item>

          <Timeline.Item title="Commits">
            <StepperChild id={1} title="second step">Hi mom</StepperChild>
          </Timeline.Item>

          <Timeline.Item title="Pull request" lineVariant="dashed">
            <StepperChild id={2} title="third step">Hi mom</StepperChild>
          </Timeline.Item>

          <Timeline.Item title="Code review">
            <StepperChild id={3} title="third step">Hi mom</StepperChild>
          </Timeline.Item>
        </Timeline>

        <Group position="right" mt="xl">
          <Button
            variant="outline"
            color="red"
            disabled={active === 0 ? true : false}
            onClick={prevStep}
          >
            Back
          </Button>
          <Button variant="outline" color="teal" onClick={nextStep}>
            {active === 3 ? <p>Checkout & Buy</p> : <p>Next step</p>}
          </Button>
        </Group>
      </Card>
    </>
  );
};

export default CreateStepper;
