import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const UpContainer = styled.View`
  height: 60%;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-weight: 700;
  color: ${colors.blue};

  align-self: flex-end;
  padding-right: 32px;
`;

// export const ImageFront = styled(LandingImage)`
//   z-index: 2;
//   margin-bottom: -20px;
// `;

export const BottomContainer = styled.View`
  background-color: ${colors.blue};
  height: 40%;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const SignInButton = styled(TouchableOpacity)`
  width: 80%;
  height: 48px;
  background-color: ${colors.white};
  border-radius: 2px;

  align-items: center;
  justify-content: center;

  margin-bottom: 24px;
`;

export const SignInButtonText = styled.Text`
  color: ${colors.blackPurple};
  font-size: 18px;
`;

export const SignUpButton = styled(TouchableOpacity)`
  width: 80%;
  height: 48px;
  background-color: ${colors.blue};
  border: 1px solid ${colors.white};
  border-radius: 2px;

  align-items: center;
  justify-content: center;

  margin-bottom: 34px;
`;

export const SignUpButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;

export const AboutButton = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;
