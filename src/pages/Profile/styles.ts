import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lightGray};
`;

export const Header = styled.View`
  height: 150px;
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

export const HeaderDown = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  border-radius: 200px;
  width: 64px;
  height: 64px;
`;

export const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.white};

  margin-left: 16px;

  width: 160px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 80px;

  margin-left: auto;
`;

export const RatingTitle = styled.Text`
  width: 80px;
  font-weight: bold;
  color: ${colors.white};
  font-size: 12px;
`;

export const RatingScore = styled.Text`
  font-weight: bold;
  line-height: 19px;
  font-size: 16px;
  color: ${colors.yellow};

  margin-right: 6px;
`;

export const Body = styled.View`
  padding-left: 16px;
  padding-right: 16px;

  margin-top: 16px;

  flex: 1;
  padding-bottom: 16px;
`;
