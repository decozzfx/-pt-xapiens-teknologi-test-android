import { Image, TouchableOpacity, View } from "react-native";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTheme } from "@/theme";
import XapiensLogo from "@/theme/assets/images/xapiens.png";
import { UsernameSvg, PasswordSvg } from "@/theme/svgs";
import { SafeScreen } from "@/components/template";
import { routesEnum, type ApplicationScreenProps } from "@/navigators/routes";
import { TextBase } from "@/components/derivatives/text";
import { InputBorder, InputString } from "@/components/derivatives/input";
import Gap from "@/components/generics/gap/Gap";
import { ButtonFull } from "@/components/derivatives/button";
import { CommonActions } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/AppStore";
import { actions as actionDataUser } from "@/redux/reducers/DataUserReducer";
import { ILoginResponse } from "@/types/commonTypes";

interface IFormValues {
  username: string;
  password: string;
}

function Auth({ navigation }: ApplicationScreenProps) {
  const { layout } = useTheme();
  const dispatch = useDispatch();
  const dataUser = useSelector((state: RootState) => state.dataUser);

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload: IFormValues) => {
      const response = await fetch("https://reqres.in/api/login", {
        body: JSON.stringify(payload),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error(JSON.stringify(response));
      return response;
    },
  });

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      username: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const navigateToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: routesEnum.MainDrawer }],
      })
    );
  };

  useEffect(() => {
    if (dataUser.token) {
      navigateToHome();
    }
  }, [dataUser.token, navigation]);

  const onSubmit = async (data: IFormValues) => {
    await mutateAsync(data, {
      async onSuccess(data) {
        const response: ILoginResponse = await data.json();
        console.log("🚀 ~ onSuccess ~ response:", response);
        dispatch(actionDataUser.setUserData(response.token));
        navigateToHome();
      },
      onError(error) {
        setError("username", {
          type: "manual",
          message: "Username atau password salah",
        });
        setError("password", {
          type: "manual",
          message: "Username atau password salah",
        });
      },
    });
  };

  const renderMain = useMemo(() => {
    return (
      <SafeScreen>
        <Gap height={100} />
        <View style={[layout.itemsCenter, layout.justifyCenter]}>
          <Image style={{ width: 200, height: 200 }} source={XapiensLogo} />
          <TextBase color={"#8696BB"} size={15}>
            Please fill login form
          </TextBase>

          <Gap height={50} />

          {/* Input Form */}
          <View style={{ height: 240, width: 327 }}>
            <Controller
              control={control}
              name="username"
              rules={{
                required: "Please input this field",
              }}
              render={({ field, fieldState }) => {
                return (
                  <InputBorder
                    leftIcon={<UsernameSvg />}
                    placeholder="Username"
                    value={field.value}
                    onChangeText={field.onChange}
                    error={errors?.username?.message}
                  />
                );
              }}
            />
            <Gap height={30} />

            <Controller
              control={control}
              name="password"
              rules={{
                required: "Please input this field",
              }}
              render={({ field, fieldState }) => (
                <InputBorder
                  leftIcon={<PasswordSvg />}
                  placeholder="Password"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={fieldState.error?.message}
                  secureTextEntry={true}
                />
              )}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate(routesEnum.Register)}
            >
              <TextBase>Dont have an account? Register</TextBase>
            </TouchableOpacity>

            <Gap height={50} />

            <View style={{ height: 50, alignItems: "center" }}>
              <ButtonFull
                buttonLoading={isPending}
                width={195}
                onPress={handleSubmit(onSubmit)}
              >
                Login
              </ButtonFull>
            </View>
          </View>
        </View>
      </SafeScreen>
    );
  }, [
    layout.itemsCenter,
    layout.justifyCenter,
    errors,
    control,
    handleSubmit,
    onSubmit,
    mutateAsync,
    isPending,
  ]);

  return renderMain;
}

export default Auth;
