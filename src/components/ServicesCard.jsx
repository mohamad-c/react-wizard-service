import { Checkbox, Group, Paper, Stack, Text } from "@mantine/core";
import React, { useState } from "react";

const ServicesCard = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Paper
      shadow="md"
      radius="md"
      p="md"
      withBorder
      style={checked ? { borderColor: "#7a0ed9" } : null}
      onClick={() => setChecked(!checked)}
    >
      <Group>
        <Checkbox
          color="violet"
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
        <Stack style={{ gap: "3px" }}>
          <Text fw={700}>This is a text</Text>
          <Text fw={400} c="dimmed" fz="sm">
            This is a text too
          </Text>
          <Text fw={500} fz="sm" pt="6px">
            199.99 $
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
};

export default ServicesCard;
