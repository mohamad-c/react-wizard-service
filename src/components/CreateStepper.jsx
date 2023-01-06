import React, { useContext } from "react";
import { Button, Group, Card, Timeline } from "@mantine/core";
import { StepperContext } from "../context/StepperContext";
import { FiZap, FiUser } from "react-icons/fi"
import StepperChild from "./StepperChild";
import Instructions from "./Card/Instruction.firstStep";
import UserForm from "./Card/UserForm.secondStep";


const CreateStepper = () => {
  const { active, nextStep, prevStep } = useContext(StepperContext);
  
  return (
    <>
      <Card withBorder shadow="md" radius="md" style={{width:"635px"}}>
        <Timeline active={active} bulletSize={24} lineWidth={2}>
          <Timeline.Item title="Wizard Service" bullet={ <FiZap size={14} /> }>
            <StepperChild id={0} title="first step" desc="You can read instruction in this step 📑">
              <Instructions />
            </StepperChild>
          </Timeline.Item>

          <Timeline.Item title="Commits" bullet={ <FiUser size={14} /> }>
            <StepperChild id={1} title="second step" desc="You must enter your identity here 🧬">
              <UserForm />
            </StepperChild>
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
