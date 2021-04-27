import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  height: 30%;
  padding: 16px 16px;
  background-color: ${colors.blue};

  justify-content: space-between;
`;

export const HeaderUp = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderGreeting = styled.View``;

export const HeaderGreetingText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
`;

export const HeaderProfileButton = styled(TouchableOpacity)`
  flex-direction: row;
`;

export const HeaderProfileText = styled.Text`
  font-size: 18px;
  margin-left: 8px;
  color: ${colors.yellow};
`;

export const HeaderTitle = styled.Text`
  font-size: 38px;
  font-weight: 700;
  color: ${colors.white};
`;

export const Body = styled.View`
  padding-left: 16px;
  padding-right: 16px;

  padding-top: 32px;
`;

export const ServiceTitle = styled.Text`
  font-size: 26px;
  font-weight: 700;

  color: ${colors.blackPurple};
`;

export const ServiceContainer = styled.ScrollView`
  padding-top: 16px;
`;

export const ServiceCard = styled.TouchableOpacity`
  width: 154px;
  height: 154px;

  padding-top: 16px;
  padding-bottom: 8px;

  background-color: ${colors.lightBlue};
  border-radius: 2px;

  margin-left: 16px;

  align-items: center;
  justify-content: space-between;
`;

export const ServiceCardImage = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${colors.white};
  border-radius: 100px;

  align-items: center;
  justify-content: center;
`;

export const ServiceCardTitle = styled.Text`
  color: ${colors.blackPurple};
  font-size: 16px;
  font-weight: 700;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;

  margin-bottom: 32px;
  margin-top: 32px;

  background-color: ${colors.gray};
`;
