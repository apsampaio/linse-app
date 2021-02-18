import React from "react";

import Input from "../../components/Input";

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
  return (
    <Container>
      <Header>
        <HeaderTitle>Linse</HeaderTitle>
      </Header>
      <Body>
        <Input
          placeholder={"CPF"}
          name="cpf"
          Icon={require("../../assets/cpf.svg").default}
        />
        <Input
          placeholder={"Senha"}
          name="password"
          isSecret
          Icon={require("../../assets/password.svg").default}
        />
        <ForgotPassword>
          <ForgotPasswordTitle>Esqueceu sua senha?</ForgotPasswordTitle>
        </ForgotPassword>
        <Button>
          <ButtonTitle>Entrar</ButtonTitle>
        </Button>
      </Body>
    </Container>
  );
};

export default SignIn;
