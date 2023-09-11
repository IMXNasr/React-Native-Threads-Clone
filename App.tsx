import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { bgColor, textColor } from "./utils/constants";

const Stack = createNativeStackNavigator();

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
    text: textColor,
		background: bgColor,
	},
};
const App = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
			<StatusBar backgroundColor={bgColor} barStyle={textColor === "#fff" ? "light-content" : "dark-content"} />
		</NavigationContainer>
	);
};

export default App;
