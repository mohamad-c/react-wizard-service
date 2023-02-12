import { Card, Center, Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCartServices } from "../../api";

const CheckoutCard = () => {
  const { data } = useQuery(["cart"], getCartServices);
  let cartDataVar;
  for (let i = 0; i < data?.length; i++) {
    cartDataVar = data[i].cartData;
  }
  
  const rows = data?.map((value) => {
    return value.cartData.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>
            <Text c="teal" weight="500">
              {item.price} $
            </Text>
          </td>
        </tr>
      );
    });
  });
  return (
    <>
      {cartDataVar?.length !== 0 ? (
        <Card bg="dark" shadow="md" radius="md">
          <Table striped verticalSpacing="xs" highlightOnHover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Card>
      ) : (
        <Center>Empty Cart</Center>
      )}
    </>
  );
};

export default CheckoutCard;
