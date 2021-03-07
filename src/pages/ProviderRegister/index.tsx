import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../../components/Input";

import {
  Container,
  Header,
  HeaderTitle,
  Body,
  Button,
  ButtonTitle,
} from "./styles";

const ProviderRegister: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <Container keyboardShouldPersistTaps="handled">
        <Header>
          <HeaderTitle>Cadastro para Prestador de Serviços</HeaderTitle>
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
          <Button onPress={() => navigation.navigate("SignUpSuccess")}>
            <ButtonTitle>Próximo</ButtonTitle>
          </Button>
        </Body>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ProviderRegister;
