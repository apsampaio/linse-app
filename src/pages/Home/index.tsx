import React from "react";

import UserIcon from "../../assets/user.svg";
import colors from "../../styles/colors";

import CleaningImage from "../../assets/jobs/cleaning.svg";
import TrimmingImage from "../../assets/jobs/trimming.svg";

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
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderUp>
          <HeaderGreeting>
            <HeaderGreetingText>Bem vindo,</HeaderGreetingText>
            <HeaderGreetingText>Andre Sampaio</HeaderGreetingText>
          </HeaderGreeting>
          <HeaderProfileButton>
            <UserIcon fill={colors.yellow} />
            <HeaderProfileText>Perfil</HeaderProfileText>
          </HeaderProfileButton>
        </HeaderUp>
        <HeaderTitle>Linse</HeaderTitle>
      </Header>
      <Body>
        <ServiceTitle>Serviços</ServiceTitle>
        <ServiceContainer>
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
      </Body>
    </Container>
  );
};

export default Home;
