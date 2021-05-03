import React, { useState } from "react";

import { Container, Title, Content } from "./styles";
import Chevron from "./chevron-right.svg";

interface MenuProps {
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
    <Container>
      <Content>
        <Icon />
        <Title>{title}</Title>
      </Content>
      <Chevron />
    </Container>
  );
};

export default MenuCard;
