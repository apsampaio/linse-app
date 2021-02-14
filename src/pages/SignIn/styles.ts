import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  height: 40%;
  background-color: ${colors.blue};

  justify-content: flex-end;
`;

export const HeaderTitle = styled.Text`
  font-size: 38px;
  font-weight: 700;
  color: ${colors.white};

  margin-left: 16px;
  margin-bottom: 16px;
`;

export const Body = styled.View`
  flex-grow: 1;
  padding-left: 32px;
  padding-right: 32px;

  padding-top: 64px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray};

  margin-bottom: 16px;
`;

export const ForgotPassword = styled(TouchableOpacity)`
  align-items: center;
  margin-bottom: 32px;
`;

export const ForgotPasswordTitle = styled.Text`
  font-size: 18px;
  color: ${colors.blue};
`;

export const Button = styled(TouchableOpacity)`
  height: 48px;
  background-color: ${colors.blue};
  border-radius: 2px;

  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;
