import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

interface ButtonProps {
  isProvider: boolean | null;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  height: 160px;
  width: 100%;
  background-color: ${colors.blue};

  padding-left: 16px;
  padding-right: 16px;

  justify-content: flex-end;
`;

export const HeaderTitle = styled.Text`
  font-size: 36px;
  font-weight: 500;
  color: ${colors.white};

  margin-bottom: 24px;
`;

export const Body = styled.View`
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  padding-top: 32px;
`;

export const ButtonAgree = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  height: 47px;
  border-width: 1px;
  border-radius: 2px;
  border-color: ${colors.green};
  background-color: ${colors.white};

  align-items: center;
  justify-content: center;

  margin-top: 24px;
  margin-bottom: 32px;

  ${(props) =>
    props.isProvider &&
    css`
      background-color: ${colors.green};
    `}
`;

export const ButtonAgreeText = styled.Text<ButtonProps>`
  color: ${colors.green};
  font-size: 18px;

  ${(props) =>
    props.isProvider &&
    css`
      color: ${colors.white};
    `}
`;

export const ButtonDisagree = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  height: 47px;
  border-width: 1px;
  border-color: ${colors.red};
  background-color: ${colors.white};
  border-radius: 2px;

  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isProvider === false &&
    css`
      background-color: ${colors.red};
    `}

  margin-top: 32px;
`;

export const ButtonDisagreeText = styled.Text<ButtonProps>`
  color: ${colors.red};
  font-size: 18px;

  ${(props) =>
    props.isProvider === false &&
    css`
      color: ${colors.white};
    `}
`;

export const Button = styled(TouchableOpacity)<ButtonProps>`
  height: 48px;
  background-color: ${colors.blue};
  border-radius: 2px;

  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isProvider === null &&
    css`
      background-color: ${colors.gray};
    `}
`;

export const ButtonTitle = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;
