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
  justify-content: flex-end;
`;

export const HeaderExitButton = styled(TouchableOpacity)`
  flex-direction: row;
`;

export const HeaderExitText = styled.Text`
  font-size: 18px;
  margin-left: 8px;
  color: ${colors.yellow};
`;
