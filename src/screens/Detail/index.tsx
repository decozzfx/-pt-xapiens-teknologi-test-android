import { Image, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "@/theme";
import NexaLogo from "@/theme/assets/images/nexalogo.svg";
import { SafeScreen } from "@/components/template";
import { RootStackNavigationTypes, routesEnum } from "@/navigators/routes";
import { Text3XL, TextBase } from "@/components/derivatives/text";
import Gap from "@/components/generics/gap/Gap";
import { CommonActions } from "@react-navigation/native";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/AppStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "./styles";

type IProps = NativeStackScreenProps<
  RootStackNavigationTypes,
  routesEnum.Detail
>;

function Detail({ navigation, route: { params } }: IProps) {
  const id = params?.id as string;
  const dataUser = useSelector((state: RootState) => state.dataUser);

  const { data } = useQuery({
    queryKey: ["dataUsers"],
    queryFn: () => {
      const data: Promise<DetailUserType> = fetch(
        "https://reqres.in/api/users/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${dataUser.token}`,
          },
        }
      ).then((response) => {
        if (!response.ok) throw new Error(JSON.stringify(response));
        return response.json();
      });
      return data;
    },
  });

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text3XL color={"#8696BB"}>User Detail</Text3XL>

        <Gap height={16} />

        <Image source={{ uri: data?.data.avatar }} style={styles.avatar} />

        <TextBase color={"#8696BB"}>
          Name : {data?.data.first_name} {data?.data.last_name}{" "}
        </TextBase>
        <TextBase color={"#8696BB"}>Email : {data?.data.email}</TextBase>
      </View>
    </SafeScreen>
  );
}

export default Detail;

interface DetailUserType {
  data: Data;
  support: Support;
}

interface Support {
  text: string;
  url: string;
}

interface Data {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}
