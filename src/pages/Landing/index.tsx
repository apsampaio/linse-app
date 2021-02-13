import React from "react";

import { TouchableOpacity } from "react-native";

import {
  Container,
  UpContainer,
  Title,
  ImageFront,
  BottomContainer,
  SignInButton,
  SignInButtonText,
  SignUpButton,
  SignUpButtonText,
  AboutButton,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <Container>
      <UpContainer>
        <Title>Linse</Title>
        <ImageFront height={"90%"} />
      </UpContainer>
      <BottomContainer>
        <SignInButton>
          <SignInButtonText>Entrar</SignInButtonText>
        </SignInButton>
        <SignUpButton>
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
