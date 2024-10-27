import React, { useMemo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Svg } from "react-native-svg";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "./mainDrawer";
import { routesEnum } from "@/navigators/routes";
import { Home, Jadwal, Pesan, Profil } from "@/screens";
import { Button, TouchableOpacity, View } from "react-native";
import { TextBase, TextM } from "@/components/derivatives/text";
import colors from "@/configs/colors";
import {
  HomeIconSvg,
  JadwalIconSvg,
  PesanIconSvg,
  UsernameSvg,
} from "@/theme/svgs";
import Gap from "@/components/generics/gap/Gap";

export type BottomTabParamList = {
  Home: undefined;
  Jadwal: undefined;
  Pesan: undefined;
  Profil: undefined;
};

const icons: any = {
  Home: <HomeIconSvg />,
  Jadwal: <JadwalIconSvg />,
  Pesan: <PesanIconSvg />,
  Profil: <UsernameSvg />,
};

type IProps = DrawerScreenProps<DrawerParamList, routesEnum.MainBottomTabMenu>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.base.baseWhite,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderTopColor: colors.border.gray,
        borderTopWidth: 1,
        justifyContent: "space-between",
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                height: 48,
                width: isFocused ? "auto" : 65,
                padding: 12,
                borderRadius: 12,
                backgroundColor: isFocused
                  ? colors.background.blue100
                  : undefined,
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              {icons[route.name]}
              {isFocused && (
                <>
                  <Gap width={8} />
                  <TextM
                    textStyle="bold"
                    textAlign="center"
                    style={{ color: isFocused ? colors.text.seablue : "#222" }}
                  >
                    {label}
                  </TextM>
                </>
              )}
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  );
}

const MainTab: React.FC<IProps> = (props) => {
  const {
    navigation: { toggleDrawer },
  } = props;

  const RenderMain = useMemo(() => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen name={routesEnum.Home} component={Home} />
        <Tab.Screen name={routesEnum.Jadwal} component={Jadwal} />
        <Tab.Screen name={routesEnum.Pesan} component={Pesan} />
        <Tab.Screen name={routesEnum.Profil} component={Profil} />
        {/* <Tab.Screen name={routesEnum.} component={} />
          <Tab.Screen name={routesEnum.} component={} {...props} /> */}
        {/* <Tab.Screen
            name={routesEnum.}
            component={}
            options={{ tabBarStyle: { display: 'none' } }}
            {...props}
          /> */}
      </Tab.Navigator>
    );
  }, [toggleDrawer, props]);

  return RenderMain;
};

export default MainTab;
