import { useNavigation } from "@react-navigation/core";
import React from "react";

import ExitIcon from "../../assets/exit.svg";
import RatingIcon from "../../assets/rating.svg";

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

const Profile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderUp>
          <HeaderExitButton onPress={() => navigation.navigate("SignIn")}>
            <ExitIcon />
            <HeaderExitText>Sair</HeaderExitText>
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
            <RatingIcon width={16} height={16} />
          </RatingContainer>
        </HeaderDown>
      </Header>
      <Body></Body>
    </Container>
  );
};

export default Profile;
