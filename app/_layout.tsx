import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="encargo" />
        <Stack.Screen name="academico" />
        <Stack.Screen name="perfil" />
        <Stack.Screen name="walker" />
        <Stack.Screen name="cuenta" />
      </Stack>
    </>
  );
}
