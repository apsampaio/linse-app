import styled from "styled-components/native";

import colors from "../../styles/colors";

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

  margin-bottom: 16px;
`;

export const HeaderDescription = styled.Text`
  font-size: 16px;
  color: ${colors.white};

  margin-bottom: 16px;
`;
