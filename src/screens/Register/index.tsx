import { Alert, Image, View } from "react-native";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTheme } from "@/theme";
import { UsernameSvg, PasswordSvg } from "@/theme/svgs";
import { SafeScreen } from "@/components/template";
import { routesEnum, type ApplicationScreenProps } from "@/navigators/routes";
import { TextBase } from "@/components/derivatives/text";
import { InputBorder, InputString } from "@/components/derivatives/input";
import Gap from "@/components/generics/gap/Gap";
import { ButtonFull } from "@/components/derivatives/button";
import { useForm, Controller } from "react-hook-form";
import { useMemo } from "react";
import XapiensLogo from "@/theme/assets/images/xapiens.png";

interface IFormValues {
  email: string;
  password: string;
}

function Register({ navigation }: ApplicationScreenProps) {
  const { layout } = useTheme();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (payload: IFormValues) => {
      const response = await fetch("https://reqres.in/api/register", {
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
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const onSubmit = async (data: IFormValues) => {
    await mutateAsync(data, {
      async onSuccess() {
        navigation.navigate(routesEnum.Auth);
        Alert.alert("Success", "Register Success, Please Login");
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
            Please fill in the form to register
          </TextBase>

          <Gap height={50} />

          {/* Input Form */}
          <View style={{ height: 240, width: 327 }}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: "Please input this field",
              }}
              render={({ field, fieldState }) => {
                return (
                  <InputBorder
                    leftIcon={<UsernameSvg />}
                    placeholder="Email"
                    value={field.value}
                    onChangeText={field.onChange}
                    error={errors?.email?.message}
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
                  secureTextEntry={true}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Gap height={50} />

            <View style={{ height: 50, alignItems: "center" }}>
              <ButtonFull
                buttonLoading={isPending}
                width={195}
                onPress={handleSubmit(onSubmit)}
              >
                Submit
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

export default Register;
