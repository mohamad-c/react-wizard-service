import { Card, Container, Divider, Group, Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCartServices } from "../../api";

const CheckoutCard = () => {
  const { data } = useQuery(["cart"], getCartServices);
  const rows = data?.map((value) => {
    return value.cartData.map((item) => (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>
          <Text c="teal" weight="500">
            {item.price} $
          </Text>
        </td>
      </tr>
    ));
  });
  return (
    <>
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
    </>
  );
};

export default CheckoutCard;
