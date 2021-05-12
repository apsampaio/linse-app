import React, { useState } from "react";

import { TouchableOpacityProps } from "react-native";

import { Container, Title, Content, IconContainer } from "./styles";

interface ServiceCardProps extends TouchableOpacityProps {
  title: string;
  Icon?: any;
}

const StatusCard: React.FC<ServiceCardProps> = ({ title, Icon, ...rest }) => {
  return (
    <Container>
      <Content>
        <IconContainer></IconContainer>
        <Title>{title}</Title>
      </Content>
      {/* <Chevron /> */}
    </Container>
  );
};

export default StatusCard;
