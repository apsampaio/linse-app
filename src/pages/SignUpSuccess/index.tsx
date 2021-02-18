import React from "react";

import { Container, Title, Description, Button, ButtonText } from "./styles";
import CheckDecagram from "../../assets/check-decagram.svg";
import TeamMeeting from "../../assets/team_meeting.svg";

const SignUpSuccess: React.FC = () => {
  return (
    <Container>
      <CheckDecagram />
      <Title>Cadastro concluído</Title>
      <Description>
        Agora você já pode acessar a Linse e conhecer novas oportunidades.
      </Description>
      <TeamMeeting />
      <Button>
        <ButtonText>Explorar conta</ButtonText>
      </Button>
    </Container>
  );
};

export default SignUpSuccess;
