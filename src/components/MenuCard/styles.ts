import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  height: 64px;
  width: 100%;

  border-radius: 2px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};

  padding-left: 16px;
  padding-right: 16px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.blackPurple};

  margin-left: 12px;
`;
