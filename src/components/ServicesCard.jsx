import { Checkbox, Group, Paper, Stack, Text } from "@mantine/core";
import React, { useRef, useState } from "react";
import "../App.css";

const ServicesCard = ({ title, desc, price, id, check = () => f }) => {
  const [checked, setChecked] = useState(false);
  const checkboxref = useRef(null);
 
  return (
    <Paper
      my={20}
      shadow="md"
      radius="md"
      p="md"
      withBorder
      className="card"
      style={checked ? { borderColor: "#7a0ed9" } : null}
      onClick={() => {
        setChecked(!checked);
        check(!checked, id)
      }}
    >
      <Group>
        <Checkbox
          color="violet"
          checked={checked}
          ref={checkboxref}
          onChange={(event) => {
            setChecked(event.currentTarget.checked);
          }}
        />
        <Stack style={{ gap: "3px" }}>
          <Text fw={700}>{title}</Text>
          <Text fw={400} c="dimmed" fz="sm">
            {desc}
          </Text>
          <Text fw={500} fz="sm" pt="6px">
            starts at {price} $
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
};

export default ServicesCard;
