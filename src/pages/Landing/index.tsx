import React from "react";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  UpContainer,
  Title,
  BottomContainer,
  SignInButton,
  SignInButtonText,
  SignUpButton,
  SignUpButtonText,
  AboutButton,
} from "./styles";

const Landing: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <UpContainer>
        <Title>Linse</Title>
        {/* <ImageFront height={"90%"} /> */}
      </UpContainer>
      <BottomContainer>
        <SignInButton onPress={() => navigation.navigate("SignIn")}>
          <SignInButtonText>Entrar</SignInButtonText>
        </SignInButton>
        <SignUpButton onPress={() => navigation.navigate("SignUp")}>
          <SignUpButtonText>Cadastrar</SignUpButtonText>
        </SignUpButton>
        <TouchableOpacity>
          <AboutButton>Sobre nós</AboutButton>
        </TouchableOpacity>
      </BottomContainer>
    </Container>
  );
};

export default Landing;
