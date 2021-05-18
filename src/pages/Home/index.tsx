import React from "react";

import colors from "../../styles/colors";

import { useNavigation } from "@react-navigation/core";
import MenuCard from "../../components/MenuCard";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  HeaderUp,
  HeaderGreeting,
  HeaderGreetingText,
  HeaderProfileButton,
  HeaderProfileText,
  HeaderTitle,
  Body,
  ServiceTitle,
  ServiceContainer,
  ServiceCard,
  ServiceCardImage,
  ServiceCardTitle,
  Separator,
} from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderUp>
          <HeaderGreeting>
            <HeaderGreetingText>Bem vindo,</HeaderGreetingText>
            <HeaderGreetingText>Andre Sampaio</HeaderGreetingText>
          </HeaderGreeting>
          <HeaderProfileButton onPress={() => navigation.navigate("Profile")}>
            <Feather name="user" size={24} color={colors.yellow} />
            <HeaderProfileText>Perfil</HeaderProfileText>
          </HeaderProfileButton>
        </HeaderUp>
        <HeaderTitle>Linse</HeaderTitle>
      </Header>
      <Body>
        <ServiceTitle>Serviços disponíveis</ServiceTitle>
        <ServiceContainer horizontal>
          <ServiceCard>
            <ServiceCardImage>{/* <CleaningImage /> */}</ServiceCardImage>
            <ServiceCardTitle>Limpeza</ServiceCardTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardImage>{/* <TrimmingImage /> */}</ServiceCardImage>
            <ServiceCardTitle>Jardinagem</ServiceCardTitle>
          </ServiceCard>
        </ServiceContainer>
        <Separator />
        <ServiceTitle>Minhas atividades</ServiceTitle>
        <MenuCard notification={true} title="SOLICITAR SERVIÇO">
          <Feather name="plus-square" size={24} color={colors.blackPurple} />
        </MenuCard>
        <MenuCard
          onPress={() => {
            navigation.navigate("MyServices");
          }}
          title="MEUS SERVIÇOS"
        >
          <Feather name="briefcase" size={24} color={colors.blackPurple} />
        </MenuCard>
        <MenuCard title="MINHAS OFERTAS">
          <Feather name="dollar-sign" size={24} color={colors.blackPurple} />
        </MenuCard>
      </Body>
    </Container>
  );
};

export default Home;
