import React, { useState } from "react";

import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Title,
  Content,
  Notification,
  NotificationText,
} from "./styles";

import Chevron from "../../assets/services/chevron.svg";

interface ServiceCardProps extends TouchableOpacityProps {
  title: string;
  Icon?: any;
}

const ServiceStatusCard: React.FC<ServiceCardProps> = ({
  title,
  Icon,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Content>
        {Icon && <Icon />}
        <Title>{title}</Title>
      </Content>
      <Chevron />
    </Container>
  );
};

export default ServiceStatusCard;
