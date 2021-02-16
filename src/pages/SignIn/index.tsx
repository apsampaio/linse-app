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

import CPFIcon from "../../assets/cpf.svg";
import PasswordIcon from "../../assets/password.svg";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Linse</HeaderTitle>
      </Header>
      <Body>
        <Input placeholder={"CPF"} name="cpf">
          <CPFIcon />
        </Input>
        <Input placeholder={"Senha"} name="password" isSecret>
          <PasswordIcon />
        </Input>
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
