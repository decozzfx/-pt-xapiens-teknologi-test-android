import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import type { ApplicationScreenProps } from "@/navigators/routes";
import { useTheme } from "@/theme";
import RootNavigator from "./rootNavigator";

const Stack = createStackNavigator<ApplicationScreenProps>();

function ApplicationNavigator() {
  const { navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
