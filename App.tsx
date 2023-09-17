import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { bgColor, textColor } from "./utils/constants";
import { ActivityScreen, HomeScreen } from "./screens";
import { ProfileScreen } from "./screens";

export type RootStackParamList = {
	Home: undefined;
	Profile: undefined;
	Activity: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
			<Stack.Navigator initialRouteName="Activity" screenOptions={{ headerShown: false, animation: "none" }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
				<Stack.Screen name="Activity" component={ActivityScreen} />
			</Stack.Navigator>
			<StatusBar backgroundColor={bgColor} barStyle={textColor === "#fff" ? "light-content" : "dark-content"} />
		</NavigationContainer>
	);
};

export default App;
