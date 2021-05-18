import { useNavigation } from "@react-navigation/core";
import React from "react";

import MenuCard from "../../components/MenuCard";

import { AntDesign, Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  HeaderUp,
  HeaderExitButton,
  HeaderExitText,
  HeaderDown,
  ProfileImage,
  ProfileName,
  RatingContainer,
  RatingTitle,
  RatingScore,
  Body,
} from "./styles";

import colors from "../../styles/colors";

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderUp>
          <HeaderExitButton onPress={() => navigation.navigate("SignIn")}>
            <HeaderExitText>Sair</HeaderExitText>
            <Feather name="log-out" size={24} color={colors.yellow} />
          </HeaderExitButton>
        </HeaderUp>
        <HeaderDown>
          <ProfileImage
            source={{
              uri: "https://avatars.githubusercontent.com/u/51516616?v=4",
            }}
          />
          <ProfileName ellipsizeMode="tail" numberOfLines={1}>
            Andre Sampaio ASUHASHUASUHHASUHUSHUAS
          </ProfileName>
          <RatingContainer>
            <RatingTitle>AVALIAÇÃO</RatingTitle>
            <RatingScore>5.0</RatingScore>
            <AntDesign name="star" size={16} color={colors.yellow} />
          </RatingContainer>
        </HeaderDown>
      </Header>
      <Body>
        <MenuCard title="MEUS DADOS">
          <Feather name="clipboard" size={24} color={colors.blackPurple} />
        </MenuCard>
        <MenuCard title="QUESTÕES FREQUENTES">
          <Feather name="help-circle" size={24} color={colors.blackPurple} />
        </MenuCard>
        <MenuCard title="MANUAL DO USUÁRIO">
          <Feather name="book-open" size={24} color={colors.blackPurple} />
        </MenuCard>
      </Body>
    </Container>
  );
};

export default Profile;
