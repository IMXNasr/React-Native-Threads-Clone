import React from "react";
import { styled } from "styled-components/native";
import { AtSign } from "../assets";
import { View } from "react-native";

const Header = () => {
	return (
		<View style={{ justifyContent: "center", alignItems: "center" }}>
			<AtSign />
		</View>
	);
};
const HomeScreen = () => {
	return (
		<Screen>
			<Header />
		</Screen>
	);
};

export default HomeScreen;

const Screen = styled.View`
	flex: 1;
`;
