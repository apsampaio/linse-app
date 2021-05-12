import { useNavigation } from "@react-navigation/core";
import React from "react";

import { Container, Body, Header, HeaderTitle } from "./styles";

import StatusCard from "../../components/StatusCard";

export const MyServicesDone: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTitle>Meus Serviços</HeaderTitle>
      </Header>
      <Body>
        <StatusCard
          title="tes"
          Icon={require("../../assets/dollar-sign.svg").default}
        />
      </Body>
    </Container>
  );
};

export const MyServicesOpen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTitle>Meus Serviços</HeaderTitle>
      </Header>
    </Container>
  );
};
