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

interface MenuProps extends TouchableOpacityProps {
  title: string;
  Icon?: any;
  notification?: boolean;
}

const MenuCard: React.FC<MenuProps> = ({
  title,
  Icon,
  notification = false,
  ...rest
}) => {
  const [hasNotification, setHasNotification] = useState(notification);

  return (
    <Container {...rest}>
      <Content>
        <Icon />
        <Title>{title}</Title>
        {hasNotification && (
          <Notification>
            <NotificationText>1</NotificationText>
          </Notification>
        )}
      </Content>
      <Chevron />
    </Container>
  );
};

export default MenuCard;
