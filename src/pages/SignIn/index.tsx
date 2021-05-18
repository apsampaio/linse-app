import React from "react";

import Input from "../../components/Input";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Header,
  HeaderTitle,
  Body,
  ForgotPassword,
  ForgotPasswordTitle,
  Button,
  ButtonTitle,
} from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTitle>Linse</HeaderTitle>
      </Header>
      <Body>
        <Input placeholder={"CPF"} name="cpf" icon="credit-card" />
        <Input placeholder={"Senha"} name="password" isSecret icon="lock" />
        <ForgotPassword>
          <ForgotPasswordTitle>Esqueceu sua senha?</ForgotPasswordTitle>
        </ForgotPassword>
        <Button>
          <ButtonTitle onPress={() => navigation.navigate("Home")}>
            Entrar
          </ButtonTitle>
        </Button>
      </Body>
    </Container>
  );
};

export default SignIn;
