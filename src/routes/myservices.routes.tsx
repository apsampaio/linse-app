import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MyServicesDone, MyServicesOpen } from "../pages/MyServices";

import colors from "../styles/colors";

const { Navigator, Screen } = createBottomTabNavigator();

const MyServicesTabs = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
          borderTopColor: colors.blue,
          borderTopWidth: 1,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
          fontWeight: "bold",
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: colors.blue,
      }}
    >
      <Screen
        name="Aberto"
        component={MyServicesOpen}
        // options={{
        //   tabBarLabel: "Aberto",
        //   tabBarIcon: ({ color, size, focused }) => {
        //     return (
        //       <OpenIcon
        //         width={size}
        //         height={size}
        //         color={focused ? colors.blue : color}
        //       />
        //     );
        //   },
        // }}
      />
      <Screen
        name="Finalizado"
        component={MyServicesDone}
        // options={{
        //   tabBarLabel: "Finalizado",
        //   tabBarIcon: ({ color, size, focused }) => {
        //     return (
        //       <ClosedIcon
        //         width={size}
        //         height={size}
        //         color={focused ? colors.blue : color}
        //       />
        //     );
        //   },
        // }}
      />
    </Navigator>
  );
};

export default MyServicesTabs;
