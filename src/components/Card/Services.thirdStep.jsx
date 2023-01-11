import React from "react";
import { ScrollArea } from "@mantine/core";
import ServicesCard from "../ServicesCard";

const Services = () => {
  return (
    <ScrollArea style={{ height: 420 }}>
      <ServicesCard />
    </ScrollArea>
  );
};

export default Services;
