import { Checkbox, Group, Paper, Stack, Text } from "@mantine/core";
import React, { useContext } from "react";
import { ReqContext } from "../context/ReqContext";
import "../App.css";

const ServicesCard = ({ title, desc, price, id, checkedServices, checkedServicesFunc }) => {
  const { checkService } = useContext(ReqContext);

  return (
    <Paper
      my={20}
      shadow="md"
      radius="md"
      p="md"
      withBorder
      className="card"
      // style={box ? { borderColor: "#7a0ed9", backgroundColor:"#7a0ed914" } : null}
    >
      <Group>
        <Checkbox.Group value={checkedServices} onChange={checkedServicesFunc}>
          <Checkbox
            onClick={(e) => {
              checkService(id, e.currentTarget.checked);
            }}
            color="violet"
            value={title}
            label={title}
          />
        </Checkbox.Group>

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
