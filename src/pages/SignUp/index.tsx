import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <Container keyboardShouldPersistTaps="handled">
        <Header>
          <HeaderTitle>Cadastrar</HeaderTitle>
          <HeaderDescription>
            Encontre novas oportunidades de trabalho utilizando a plataforma
            Linse.
          </HeaderDescription>
        </Header>
        <Body>
          <Input name="name" placeholder="Nome Completo" icon="user" />
          <Input name="cpf" placeholder="CPF" icon="credit-card" />
          <Input name="whatsapp" placeholder="WhatsApp" icon="message-circle" />
          <Input name="mail" placeholder="E-mail" icon="mail" />
          <Input name="cep" placeholder="CEP" icon="map-pin" />
          <Input name="password" placeholder="Senha" isSecret icon="lock" />
          <Input
            name="confirmPassword"
            placeholder="Confirmar Senha"
            isSecret
            icon="lock"
          />
          <Button onPress={() => navigation.navigate("ProviderRegister")}>
            <ButtonTitle>Próximo</ButtonTitle>
          </Button>
        </Body>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
