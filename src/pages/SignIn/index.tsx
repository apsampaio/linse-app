import React from "react";

import {
  Container,
  Header,
  HeaderTitle,
  Body,
  Input,
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
        <Input placeholder="CPF" />
        <Input placeholder="Senha" />
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
