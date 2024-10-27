import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackNavigationTypes, routesEnum } from "./routes";
import { Home, Auth, Jadwal } from "@/screens";
import DrawerNavigator from "@/navigators/mainDrawer";

const Stack = createNativeStackNavigator<RootStackNavigationTypes>();
const { Navigator } = Stack;
const { Screen } = Stack;
import { useTheme } from "@/theme";
import Register from "@/screens/Register";
import Detail from "@/screens/Detail";

function RootNavigator() {
  const { variant } = useTheme();

  return (
    <Navigator key={variant} screenOptions={{ headerShown: false }}>
      <Screen name={routesEnum.Auth} component={Auth} />
      <Screen name={routesEnum.Register} component={Register} />
      <Screen name={routesEnum.Home} component={Home} />
      <Screen name={routesEnum.Detail} component={Detail} />
      <Screen name={routesEnum.Jadwal} component={Jadwal} />
      <Screen name={routesEnum.MainDrawer} component={DrawerNavigator} />
    </Navigator>
  );
}

export default React.memo(RootNavigator);
