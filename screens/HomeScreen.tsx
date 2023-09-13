import { styled } from "styled-components/native";
import { Logo } from "../assets";
import { View } from "react-native";
import Tabs from "../components/Tabs";
import { Post } from "../components";
import { posts } from "../utils/data";

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
			<Screen showsVerticalScrollIndicator={false}>
				<Header />
				{posts.map((post, idx) => (
					<Post {...post} key={idx} />
				))}
			</Screen>
			<Tabs activeIcon="Home" />
		</>
	);
};

export default HomeScreen;

const Screen = styled.ScrollView`
	flex: 1;
`;
