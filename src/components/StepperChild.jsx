import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Text, Card } from "@mantine/core";
import { StepperContext } from "../context/StepperContext";

const StepperChild = ({ title, children, id }) => {
  const { active } = useContext(StepperContext);
  return (
    <>
      <Text color="dimmed" size="sm">
        {title}
      </Text>

      {active === id ? (
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: 50 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <Card withBorder shadow="lg" p="200px" m="25px">
            {children}
          </Card>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
};

export default StepperChild;
