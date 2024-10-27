import { SafeAreaView, StatusBar } from "react-native";

import { useTheme } from "@/theme";

import type { PropsWithChildren } from "react";
import colors from "@/configs/colors";

function SafeScreen({ children }: PropsWithChildren) {
  const { layout, variant, navigationTheme } = useTheme();

  return (
    <SafeAreaView
      style={[layout.flex_1, { backgroundColor: colors.base.baseWhite }]}
    >
      <StatusBar
        barStyle={variant === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.base.baseWhite}
      />
      {children}
    </SafeAreaView>
  );
}

export default SafeScreen;
