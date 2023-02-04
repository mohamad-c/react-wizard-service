import React, { useContext } from "react";
import { ScrollArea } from "@mantine/core";
import ServicesCard from "../ServicesCard";
import { ReqContext } from "../../context/ReqContext";

const Services = () => {
  const { servicesData, checkService, checked, checkedStatus, setCheckedcheckedStatus } = useContext(ReqContext);
  console.log(checked)
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
          checkedServices={checkedStatus}
          checkedServicesFunc={setCheckedcheckedStatus}
        />
      ))
      }
    </ScrollArea>
  );
};

export default Services;
