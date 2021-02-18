import React from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import Input from "../../components/Input";

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
            <Input
              name="name"
              placeholder="Nome Completo"
              Icon={require("../../assets/user.svg").default}
            />
            <Input
              name="cpf"
              placeholder="CPF"
              Icon={require("../../assets/cpf.svg").default}
            />
            <Input
              name="whatsapp"
              placeholder="WhatsApp"
              Icon={require("../../assets/message-circle.svg").default}
            />
            <Input
              name="mail"
              placeholder="E-mail"
              Icon={require("../../assets/mail.svg").default}
            />
            <Input
              name="password"
              placeholder="Senha"
              isSecret
              Icon={require("../../assets/password.svg").default}
            />
            <Input
              name="confirmPassword"
              placeholder="Confirmar Senha"
              isSecret
              Icon={require("../../assets/password.svg").default}
            />
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
