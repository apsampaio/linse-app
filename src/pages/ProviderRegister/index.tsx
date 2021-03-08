import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../../components/Input";

import {
  Container,
  Header,
  HeaderTitle,
  Body,
  ButtonAgree,
  ButtonAgreeText,
  ButtonDisagree,
  ButtonDisagreeText,
  Button,
  ButtonTitle,
} from "./styles";

const ProviderRegister: React.FC = () => {
  const navigation = useNavigation();
  const [isProvider, setIsProvider] = useState<null | boolean>(null);

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
          <ButtonDisagree
            isProvider={isProvider}
            onPress={() => setIsProvider(false)}
          >
            <ButtonDisagreeText isProvider={isProvider}>
              Não tenho interesse!
            </ButtonDisagreeText>
          </ButtonDisagree>
          <ButtonAgree
            isProvider={isProvider}
            onPress={() => setIsProvider(true)}
          >
            <ButtonAgreeText isProvider={isProvider}>
              Tenho interesse!
            </ButtonAgreeText>
          </ButtonAgree>
          {isProvider && (
            <>
              <Input
                name="carrer"
                placeholder="Profissão"
                Icon={require("../../assets/career.svg").default}
              />
              <Input
                name="average-value"
                placeholder="Valor por serviço"
                Icon={require("../../assets/money.svg").default}
              />
            </>
          )}
          <Button
            onPress={() => navigation.navigate("SignUpSuccess")}
            disabled={isProvider === null}
            isProvider={isProvider}
          >
            <ButtonTitle>Finalizar</ButtonTitle>
          </Button>
        </Body>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ProviderRegister;
