import React from "react";

import { Container, Header, HeaderTitle, HeaderDescription } from "./styles";

const SignUp: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastrar</HeaderTitle>
        <HeaderDescription>
          Encontre novas oportunidades de trabalho utilizando a plataforma
          Linse.
        </HeaderDescription>
      </Header>
    </Container>
  );
};

export default SignUp;
