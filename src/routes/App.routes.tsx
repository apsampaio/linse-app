import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ProviderRegister from "../pages/ProviderRegister";
import SignUpSuccess from "../pages/SignUpSuccess";

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Landing" component={Landing} />
      <App.Screen name="SignIn" component={SignIn} />
      <App.Screen name="SignUp" component={SignUp} />
      <App.Screen name="ProviderRegister" component={ProviderRegister} />
      <App.Screen name="SignUpSuccess" component={SignUpSuccess} />
    </App.Navigator>
  );
};

export default AppRoutes;
