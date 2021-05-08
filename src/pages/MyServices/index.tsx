import { useNavigation } from "@react-navigation/core";
import React from "react";

import { Container, Body, Header, HeaderTitle } from "./styles";

import ServiceStatusCard from "../../components/ServiceStatusCard";

export const MyServicesDone: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTitle>Meus Serviços</HeaderTitle>
      </Header>
      <Body>
        <ServiceStatusCard
          title="Teste"
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
