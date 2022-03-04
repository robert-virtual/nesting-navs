import { Feed, Messages } from "../pages";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="Feed"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
        component={Feed}
      />
      <Tab.Screen
        name="Messages"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
        component={Messages}
      />
    </Tab.Navigator>
  );
}
