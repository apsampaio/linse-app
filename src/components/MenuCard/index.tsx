import React, { useState } from "react";

import { TouchableOpacityProps } from "react-native";

import { FeatherIcon } from "../../interfaces/FeatherIcon";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Title,
  Content,
  Notification,
  NotificationText,
} from "./styles";
import colors from "../../styles/colors";

interface MenuProps extends TouchableOpacityProps {
  title: string;
  notification?: boolean;
  icon: FeatherIcon;
}

const MenuCard: React.FC<MenuProps> = ({
  title,
  notification = false,
  icon,
  ...rest
}) => {
  const [hasNotification, setHasNotification] = useState(notification);

  return (
    <Container>
      <Content>
        <Feather name={icon} size={24} color={colors.blackPurple} />
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
