import React, { useContext, useState } from "react";
import { ScrollArea } from "@mantine/core";
import ServicesCard from "../ServicesCard";
import { ReqContext } from "../../context/ReqContext";

const Services = () => {
  const { servicesData, checkService, checked } = useContext(ReqContext);
  
  return (
    <ScrollArea style={{ height: 420 }} offsetScrollbars>
      {
      servicesData?.map((val) => (
        <ServicesCard
          title={val.title}
          desc={val.desc}
          price={val.price}
          key={val.id}
          id={val.id}
          check={checkService}
        />
      ))
      }
    </ScrollArea>
  );
};

export default Services;
