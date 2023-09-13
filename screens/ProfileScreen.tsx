import { styled } from "styled-components/native";
import { Post, Tabs } from "../components";
import { bgColor, gap, secondaryColor, textColor } from "../utils/constants";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/FontAwesome6";
import IconA from "react-native-vector-icons/AntDesign";
import { posts } from "../utils/data";

const Navbar = ({ activeTab }: { activeTab: "Threads" | "Replies" | "Reposts" }) => {
	return (
		<Nav>
			<NavItem style={activeTab === "Threads" && { borderBottomColor: textColor, borderBottomWidth: 1 }}>
				<NavItemText style={activeTab === "Threads" && { color: textColor }}>Threads</NavItemText>
			</NavItem>
			<NavItem style={activeTab === "Replies" && { borderBottomColor: textColor, borderBottomWidth: 1 }}>
				<NavItemText style={activeTab === "Replies" && { color: textColor }}>Replies</NavItemText>
			</NavItem>
			<NavItem style={activeTab === "Reposts" && { borderBottomColor: textColor, borderBottomWidth: 1 }}>
				<NavItemText style={activeTab === "Reposts" && { color: textColor }}>Reposts</NavItemText>
			</NavItem>
		</Nav>
	);
};

const Nav = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-bottom-color: ${secondaryColor}77;
`;
const NavItem = styled.View`
	flex: 1;
	padding: 20px 0;
	justify-content: center;
	align-items: center;
`;
const NavItemText = styled.Text`
	color: ${secondaryColor};
	font-size: 18px;
`;

const ProfileScreen = () => {
	return (
		<>
			<Screen>
				<Top>
					<Header>
						<IconM name="web" size={30} color={textColor} />
						<R>
							<IconA name="instagram" size={30} color={textColor} />
							<IconF name="grip-lines" size={30} color={textColor} style={{ marginLeft: 30 }} />
						</R>
					</Header>
					<Info>
						<Left>
							<Name>IMX ⚡</Name>
							<Username>
								<Text>itsimoox </Text>
								<Threads>
									<Text style={{ color: secondaryColor }}>threads.net</Text>
								</Threads>
							</Username>
						</Left>
						<Right>
							<ProfileImgContainer>
								<UserImg source={require("../assets/default_profile.png")} />
							</ProfileImgContainer>
						</Right>
					</Info>
					<Description>Full Stack Developer</Description>
					<Followers>
						<Users>
							<UserImgContainer style={{ marginLeft: -2 }}>
								<UserImg source={require("../assets/default_profile.png")} />
							</UserImgContainer>
							<UserImgContainer>
								<UserImg source={require("../assets/default_profile.png")} />
							</UserImgContainer>
						</Users>
						<FollowersText>10k Followers · twitter.com/itsimoox</FollowersText>
					</Followers>
					<Btns>
						<Btn style={{ marginRight: 15 }}>
							<BtnText>Edit profile</BtnText>
						</Btn>
						<Btn>
							<BtnText>Share profile</BtnText>
						</Btn>
					</Btns>
				</Top>
				<Navbar activeTab="Threads" />
				{posts.map((post, idx) => (
					<Post {...post} key={idx} />
				))}
			</Screen>
			<Tabs activeIcon="User" />
		</>
	);
};

export default ProfileScreen;

const Screen = styled.ScrollView`
	flex: 1;
`;
const Top = styled.View`
	padding: 0 ${gap};
`;
const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
`;
const R = styled.View`
	flex-direction: row;
	align-items: center;
`;
const Info = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const Left = styled.View``;
const Name = styled.Text`
	color: ${textColor};
	font-weight: bold;
	font-size: 30px;
`;
const Username = styled.View`
	flex-direction: row;
	align-items: center;
`;
const Text = styled.Text`
	color: ${textColor};
`;
const Threads = styled.View`
	background-color: ${secondaryColor}55;
	border-radius: 9999px;
	padding: 5px;
`;
const Description = styled.Text`
	color: ${textColor};
	font-size: 15px;
	margin-top: 10px;
`;
const Followers = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 10px;
`;
const Users = styled.View`
	flex-direction: row;
`;
const UserImgContainer = styled.View`
	width: 22px;
	aspect-ratio: 1;
	border-radius: 9999px;
	border: 3px solid ${bgColor};
	overflow: hidden;
	margin-left: -10px;
`;
const UserImg = styled.Image`
	width: 100%;
	height: 100%;
`;
const FollowersText = styled.Text`
	color: ${secondaryColor};
	font-size: 16px;
	margin-left: 5px;
`;
const Btns = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
`;
const Btn = styled.Pressable`
	flex: 1;
	background-color: ${bgColor};
	border: 1px solid ${secondaryColor};
	border-radius: 10px;
	padding: 7px 0;
	align-items: center;
`;
const BtnText = styled.Text`
	color: ${textColor};
	font-size: 15px;
`;
const Right = styled.View``;
const ProfileImgContainer = styled.View`
	width: 100px;
	height: 100px;
	border-radius: 9999px;
	overflow: hidden;
`;
