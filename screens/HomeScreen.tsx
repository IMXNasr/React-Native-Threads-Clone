import { styled } from "styled-components/native";
import { Logo } from "../assets";
import { View } from "react-native";
import Tabs from "../components/Tabs";

const Header = () => {
	return (
		<View style={{ justifyContent: "center", alignItems: "center" }}>
			<Logo />
		</View>
	);
};
const HomeScreen = () => {
	return (
		<>
			<Screen>
				<Header />
			</Screen>
			<Tabs activeIcon="Home" />
		</>
	);
};

export default HomeScreen;

const Screen = styled.ScrollView`
	flex: 1;
`;
