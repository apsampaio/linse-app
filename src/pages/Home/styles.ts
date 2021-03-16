import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  height: 30%;
  background-color: ${colors.blue};

  justify-content: flex-end;
`;

export const HeaderGreeting = styled.Text`

`;

export const HeaderTitle = styled.Text`
  font-size: 38px;
  font-weight: 500;
  color: ${colors.white};

  margin-left: 16px;
  margin-bottom: 16px;
`;

export const Body = styled.View`
  flex-grow: 1;
  padding-left: 32px;
  padding-right: 32px;

  padding-top: 32px;
`;
