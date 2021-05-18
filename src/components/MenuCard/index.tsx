import React, { useState } from "react";

import { TouchableOpacityProps } from "react-native";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  Title,
  Content,
  Notification,
  NotificationText,
} from "./styles";

interface MenuProps extends TouchableOpacityProps {
  title: string;
  notification?: boolean;
}

const MenuCard: React.FC<MenuProps> = ({
  title,
  notification = false,
  children,
  ...rest
}) => {
  const [hasNotification, setHasNotification] = useState(notification);

  return (
    <Container>
      <Content>
        {children}
        <Title>{title}</Title>
        {hasNotification && (
          <Notification>
            <NotificationText>1</NotificationText>
          </Notification>
        )}
      </Content>
      <Feather name="chevron-right" size={24} color="#737380" />
    </Container>
  );
};

export default MenuCard;
