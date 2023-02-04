import React, { useContext } from "react";
import { Button, Group, Card, Timeline, Divider, Text } from "@mantine/core";
import { StepperContext } from "../context/StepperContext";
import { FiZap, FiUser, FiBox, FiShoppingBag } from "react-icons/fi";
import StepperChild from "./StepperChild";
import Instructions from "./Card/Instruction.firstStep";
import UserForm from "./Card/UserForm.secondStep";
import Services from "./Card/Services.thirdStep";
import { ReqContext } from "../context/ReqContext";
import { getUser } from "../api";
import { useQuery } from "@tanstack/react-query";

const CreateStepper = () => {
  const { active, nextStep, prevStep } = useContext(StepperContext);
  const { serviceSum, checked } = useContext(ReqContext);
  const sum = serviceSum !== null ? serviceSum.toFixed(2) : "";
  const isTrue = active === 1;
  const { data, isLoading } = useQuery(["user"], getUser, { enabled: isTrue });

  return (
    <>
      <Card withBorder shadow="md" radius="md" style={{ width: "635px" }}>
        <Timeline active={active} bulletSize={24} lineWidth={2}>
          <Timeline.Item title="Wizard Service" bullet={<FiZap size={14} />}>
            <StepperChild
              id={0}
              title="first step"
              desc="You can read instruction in this step 📑"
            >
              <Instructions />
            </StepperChild>
          </Timeline.Item>

          <Timeline.Item
            title="Profile"
            bullet={<FiUser size={14} />}
            lineVariant="dashed"
          >
            <StepperChild
              id={1}
              title="second step"
              desc="You must enter your identity here 🧬"
            >
              <UserForm />
            </StepperChild>
          </Timeline.Item>

          <Timeline.Item title="Services" bullet={<FiBox size={14} />}>
            <StepperChild
              id={2}
              title="third step"
              desc="You can choose your services from here 🎀"
            >
              <Services />
            </StepperChild>
          </Timeline.Item>

          <Timeline.Item
            title="Buy Services"
            bullet={<FiShoppingBag size={14} />}
          >
            <StepperChild
              id={3}
              title="third step"
              desc="You can pay for your services here 💵"
            >
              Hi mom
            </StepperChild>
          </Timeline.Item>
        </Timeline>
        <Divider my={15} />
        <Group position="apart" mt="xl">
          {checked.length !== 0 ? (
            <Group spacing="xs" style={{ gap: "0px" }}>
              <Text fz="xl" fw={700} c="teal">
                {sum}
              </Text>
              <Text pr={200} fz="xs" c="dimmed">
                /USD
              </Text>
            </Group>
          ) : (
            <div></div>
          )}

          <Group>
            <Button
              variant="outline"
              color="red"
              disabled={active === 0 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                prevStep();
              }}
            >
              Back
            </Button>
            <Button
              variant="outline"
              color="teal"
              onClick={(e) => {
                e.preventDefault();
                nextStep();
              }}
              disabled={active === 1 ? (data?.length === 0 ? true : false) : ""}
              loading={active === 1 ? (isLoading ? true : false) : ""}
            >
              {active === 3 ? <p>Checkout & Buy</p> : <p>Next step</p>}
            </Button>
          </Group>
        </Group>
      </Card>
    </>
  );
};

export default CreateStepper;
