import { useNavigation } from "@react-navigation/core";
import React from "react";

import ExitIcon from "../../assets/exit.svg";

import {
  Container,
  Header,
  HeaderUp,
  HeaderExitButton,
  HeaderExitText,
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
      </Header>
    </Container>
  );
};

export default Profile;
