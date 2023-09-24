import { styled } from "styled-components/native";
import { gap, secondaryColor, textColor } from "../utils/constants";
import { Tabs, UserCard } from "../components";
import IconF from "react-native-vector-icons/Feather";
import { useState } from "react";

const SearchScreen = () => {
	const [search, setSearch] = useState("");
	const searchFn = (t: string) => {
		setSearch(t);
		console.log(t);
	};
	return (
		<>
			<Screen>
				<Title>Search</Title>
				<SearchContainer>
					<IconF name="search" size={24} color={secondaryColor} />
					<TextInput value={search} onChangeText={(t) => searchFn(t)} placeholder="Search" placeholderTextColor={secondaryColor} />
				</SearchContainer>
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
			</Screen>
			<Tabs activeIcon="Search" />
		</>
	);
};

export default SearchScreen;

const Screen = styled.ScrollView`
	flex: 1;
	padding: 0 ${gap};
`;
const Title = styled.Text`
	color: ${textColor};
	font-size: 30px;
	margin: 10px 0;
`;
const SearchContainer = styled.View`
	width: 100%;
	background-color: ${secondaryColor}55;
	padding: 5px 10px;
	border-radius: 10px;
	margin-bottom: 10px;
	flex-direction: row;
	align-items: center;
`;
const TextInput = styled.TextInput`
	flex: 1;
	height: 30px;
	color: ${textColor};
	font-size: 16px;
	margin-left: 10px;
	padding: 0;
`;
