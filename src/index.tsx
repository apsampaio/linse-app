import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import colors from "./styles/colors";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={{ flex: 1, backgroundColor: colors.blue }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
