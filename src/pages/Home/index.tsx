import React from "react";

import UserIcon from "../../assets/user.svg";
import colors from "../../styles/colors";

import CleaningImage from "../../assets/jobs/cleaning.svg";
import TrimmingImage from "../../assets/jobs/trimming.svg";

import { useNavigation } from "@react-navigation/core";
import MenuCard from "../../components/MenuCard";

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
            <UserIcon fill={colors.yellow} />
            <HeaderProfileText>Perfil</HeaderProfileText>
          </HeaderProfileButton>
        </HeaderUp>
        <HeaderTitle>Linse</HeaderTitle>
      </Header>
      <Body>
        <ServiceTitle>Serviços</ServiceTitle>
        <ServiceContainer horizontal>
          <ServiceCard>
            <ServiceCardImage>
              <CleaningImage />
            </ServiceCardImage>
            <ServiceCardTitle>Limpeza</ServiceCardTitle>
          </ServiceCard>
          <ServiceCard>
            <ServiceCardImage>
              <TrimmingImage />
            </ServiceCardImage>
            <ServiceCardTitle>Jardinagem</ServiceCardTitle>
          </ServiceCard>
        </ServiceContainer>
        <Separator />
        <ServiceTitle>Minhas Atividades</ServiceTitle>
        <MenuCard
          title="SOLICITAR SERVIÇO"
          Icon={require("../../assets/plus-square.svg").default}
        />
        <MenuCard
          title="MEUS SERVIÇOS"
          Icon={require("../../assets/briefcase.svg").default}
        />
        <MenuCard
          title="MINHAS OFERTAS"
          Icon={require("../../assets/dollar-sign.svg").default}
        />
      </Body>
    </Container>
  );
};

export default Home;
