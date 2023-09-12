import { styled } from "styled-components/native";
import { Heart, Home, Pen, Search, User } from "../assets";

const Tabs = ({ activeIcon }: { activeIcon: "Home" | "Search" | "Pen" | "Heart" | "User" }) => {
	return (
		<TabsComponent>
			<Home active={activeIcon === "Home"} />
			<Search active={activeIcon === "Search"} />
			<Pen active={activeIcon === "Pen"} />
			<Heart active={activeIcon === "Heart"} />
			<User active={activeIcon === "User"} />
		</TabsComponent>
	);
};

export default Tabs;

const TabsComponent = styled.View`
	width: 100%;
	height: 60px;
	/* background-color: red; */
	bottom: 0;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
`;
