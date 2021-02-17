import React from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import Input from "../../components/Input";

import UserIcon from "../../assets/user.svg";
import CPFIcon from "../../assets/cpf.svg";
import MailIcon from "../../assets/mail.svg";
import WhatsAppIcon from "../../assets/message-circle.svg";
import PasswordIcon from "../../assets/password.svg";

import {
  Container,
  Header,
  HeaderTitle,
  HeaderDescription,
  Body,
  Button,
  ButtonTitle,
} from "./styles";

//TODO [ ]  - Add SafeAreaView // KeyboardAvoidArea
//TODO [ ]  - Dynamic inport  for icons
const SignUp: React.FC = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Header>
            <HeaderTitle>Cadastrar</HeaderTitle>
            <HeaderDescription>
              Encontre novas oportunidades de trabalho utilizando a plataforma
              Linse.
            </HeaderDescription>
          </Header>
          <Body>
            <Input name="name" placeholder="Nome Completo">
              <UserIcon />
            </Input>
            <Input name="cpf" placeholder="CPF">
              <CPFIcon />
            </Input>
            <Input name="whatsapp" placeholder="WhatsApp">
              <WhatsAppIcon />
            </Input>
            <Input name="mail" placeholder="E-mail">
              <MailIcon />
            </Input>
            <Input name="password" placeholder="Senha" isSecret>
              <PasswordIcon />
            </Input>
            <Input
              name="confirmPassword"
              placeholder="Confirmar Senha"
              isSecret
            >
              <PasswordIcon />
            </Input>
            <Button>
              <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>
          </Body>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
