import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { RootState } from "@/redux/AppStore";
import { SafeScreen } from "@/components/template";
import styles from "./styles";

import { useSelector } from "react-redux";
import { Text3XL, TextL } from "@/components/derivatives/text";
import { useQuery } from "@tanstack/react-query";
import { ApplicationScreenProps, routesEnum } from "@/navigators/routes";

function Home({ navigation }: ApplicationScreenProps) {
  const dataUser = useSelector((state: RootState) => state.dataUser);
  const { data } = useQuery({
    queryKey: ["dataUsers"],
    queryFn: () => {
      const data: Promise<DataUserType> = fetch("https://reqres.in/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataUser.token}`,
        },
      }).then((response) => {
        if (!response.ok) throw new Error(JSON.stringify(response));
        return response.json();
      });
      return data;
    },
  });

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text3XL>List User</Text3XL>
        <FlatList
          data={data?.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routesEnum.Detail, { id: item.id })
              }
              style={styles.item}
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <TextL>{item.first_name}</TextL>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeScreen>
  );
}

export default Home;

interface DataUserType {
  data: UserType[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
}

interface Support {
  text: string;
  url: string;
}

interface UserType {
  avatar: string;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
}
