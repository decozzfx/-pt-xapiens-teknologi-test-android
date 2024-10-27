export enum routesEnum {
  Auth = "Auth",
  Register = "Register",
  Home = "Home",
  Detail = "Detail",
  Jadwal = "Jadwal",
  Pesan = "Pesan",
  Profil = "Profil",
  MainBottomTabMenu = "MainBottomTabMenu",
  MainDrawer = "MainDrawer",
}

export type RootStackNavigationTypes = {
  [routesEnum.Auth]: undefined;
  [routesEnum.Register]: undefined;
  [routesEnum.Home]: undefined;
  [routesEnum.Detail]: { id: string };
  [routesEnum.Jadwal]: undefined;
  [routesEnum.Pesan]: undefined;
  [routesEnum.Profil]: undefined;

  // Bottom Tab Menu
  [routesEnum.MainBottomTabMenu]: undefined;
  [routesEnum.MainDrawer]: {
    navigateToScreen?: routesEnum;
    params?: string;
  };
};

import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationScreenProps = StackScreenProps<RootStackNavigationTypes>;
