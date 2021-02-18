import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.blue};

  align-items: center;
  padding: 0 32px;
  padding-top: 32px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 28px;
  font-weight: 700;
`;

export const Description = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  text-align: center;
  padding: 16px 0px;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 47px;
  border-width: 1px;
  border-color: ${colors.white};
  background-color: transparent;
  border-radius: 2px;

  align-items: center;
  justify-content: center;

  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;
