import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lightGray};
`;

export const Header = styled.View`
  height: 100px;
  padding: 16px 16px;
  background-color: ${colors.blue};

  justify-content: flex-end;
`;

export const HeaderTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};

  margin-left: auto;
`;

export const Body = styled.View`
  flex: 1;
`;
