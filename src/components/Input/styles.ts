import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.View`
  width: 100%;
  height: 40px;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.darkGray};

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  margin-left: 8px;
  padding-right: 16px;
`;
export const TextInput = styled.TextInput`
  flex: 2;
  color: #000000;
  font-size: 16px;
`;
