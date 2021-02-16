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

import CpfIcon from "../../assets/cpf.svg";
import colors from "../../styles/colors";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Linse</HeaderTitle>
      </Header>
      <Body>
        <Input>
          <CpfIcon height={24} width={24} />
        </Input>
        <Input />
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
