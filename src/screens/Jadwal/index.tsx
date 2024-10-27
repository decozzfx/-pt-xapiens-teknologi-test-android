import { View } from "react-native";
import { SafeScreen } from "@/components/template";

import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

function Jadwal() {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Icon name="person" size={50} color="red" />
      </View>
    </SafeScreen>
  );
}

export default Jadwal;
