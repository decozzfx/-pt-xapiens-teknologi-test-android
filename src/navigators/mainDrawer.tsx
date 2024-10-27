/* React Imports */
import React, { useCallback, useEffect } from "react";

/* Third Party Imports */
import MainTab from "./mainTab";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackNavigationTypes, routesEnum } from "@/navigators/routes";

export type DrawerParamList = {
  MainBottomTabMenu: undefined;
};

export type MainDrawerNavigatiorProps = NativeStackNavigationProp<
  RootStackNavigationTypes,
  routesEnum.MainDrawer
>;

export type MainProps = {
  navigation: MainDrawerNavigatiorProps;
  route: {
    params: RootStackNavigationTypes[routesEnum.MainDrawer];
  };
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const MainDrawer = (mainProps: MainProps) => {
  const {
    route: { params },
    navigation,
  } = mainProps;

  useEffect(() => {
    const sendParams = () => {
      return undefined;
    };

    if (params?.navigateToScreen) {
      navigation.navigate(params.navigateToScreen as any, sendParams());
    }
  }, [navigation, params]);

  /* Render Main */
  const renderMain = useCallback(() => {
    return (
      <Drawer.Navigator
        initialRouteName={routesEnum.MainBottomTabMenu}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name={routesEnum.MainBottomTabMenu}
          component={MainTab}
        />
      </Drawer.Navigator>
    );
  }, []);

  return renderMain();
};

export default MainDrawer;
