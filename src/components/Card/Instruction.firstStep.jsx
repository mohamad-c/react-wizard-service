import React from "react";
import { Text } from "@mantine/core";

const Instructions = () => {
  return (
    <>
      <Text fw={700} fz={18}>
        Greetings, This is Wizard Service 👋.
      </Text>
      <Text fw={600} fz="sm" ta="start" c="dimmed" pt="10px">
        💎. This wizard can provide you some services from our company.
        <br />
        The wizard includes 5 steps which you have to take <br />
      </Text>
      <Text fw={600} fz="sm" ta="start" c="dimmed" pt="10px">
        🎤. On the second step you have to register in our platform
        <br />
        using your first and last name, email address and phone number.
      </Text>
      <Text fw={600} fz="sm" ta="start" c="dimmed" pt="10px">
        📚. You can see and choose our services from third step.
      </Text>
      <Text fw={600} fz="sm" ta="start" c="dimmed" pt="10px">
        🛒. Chosen services and thier prices are visible on fourth step.
        <br />
        You can proceed to choose other services or pay for them <br />
        at any momment you wish.
      </Text>
    </>
  );
};

export default Instructions;
