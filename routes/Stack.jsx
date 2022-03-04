import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, Settings } from "../pages";
import { Tabs } from "./Tabs";

const NativeStack = createNativeStackNavigator();

export function Stack() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={Tabs}
        />
        <NativeStack.Screen name="Profile" component={Profile} />
        <NativeStack.Screen name="Settings" component={Settings} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
