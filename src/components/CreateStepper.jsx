import React from "react";
import { Button, Group, Card } from "@mantine/core";
import { useState } from "react";
import { Timeline, Text } from "@mantine/core";
import { motion } from "framer-motion";

const CreateStepper = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Card withBorder shadow="md" radius="md">
        <Timeline active={active} bulletSize={24} lineWidth={2}>
          <Timeline.Item title="New branch">
            <Text color="dimmed" size="sm">
              You&apos;ve created new branch{" "}
              <Text variant="link" component="span" inherit>
                fix-notifications
              </Text>{" "}
              from master
            </Text>
            <Text size="xs" mt={4}>
              2 hours ago
            </Text>
            {active === 0 ? (
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 50 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <Card withBorder shadow="lg" p="200px" m="25px">
                  <p>hi mom</p>
                </Card>
              </motion.div>
            ) : (
              <></>
            )}
          </Timeline.Item>

          <Timeline.Item title="Commits">
            <Text color="dimmed" size="sm">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
            {active === 1 ? (
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 50 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <Card withBorder shadow="lg" p="200px" m="25px">
                  <p>hi mom</p>
                </Card>
              </motion.div>
            ) : (
              <></>
            )}
          </Timeline.Item>

          <Timeline.Item title="Pull request" lineVariant="dashed">
            <Text color="dimmed" size="sm">
              You&apos;ve submitted a pull request
              <Text variant="link" component="span" inherit>
                Fix incorrect notification message (#187)
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              34 minutes ago
            </Text>
            {active === 2 ? (
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 50 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <Card withBorder shadow="lg" p="200px" m="25px">
                  <p>hi mom</p>
                </Card>
              </motion.div>
            ) : (
              <></>
            )}
          </Timeline.Item>

          <Timeline.Item title="Code review">
            <Text color="dimmed" size="sm">
              <Text variant="link" component="span" inherit>
                Robert Gluesticker
              </Text>{" "}
              left a code review on your pull request
            </Text>
            <Text size="xs" mt={4}>
              12 minutes ago
            </Text>
            {active === 3 ? (
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 50 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <Card withBorder shadow="lg" p="200px" m="25px">
                  <p>hi mom</p>
                </Card>
              </motion.div>
            ) : (
              <></>
            )}
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
            {
              active === 3 ? <p>Checkout & Buy</p> : <p>Next step</p>
            }
          </Button>
        </Group>
      </Card>
    </>
  );
};

export default CreateStepper;
