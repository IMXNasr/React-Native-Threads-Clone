import { styled } from "styled-components/native";
import { bgColor, gap, secondaryColor, textColor } from "../utils/constants";
import IconE from "react-native-vector-icons/Entypo";
import IconI from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/Feather";
import { useState } from "react";
import { Image } from "react-native";
import { UserImg } from ".";

const Post = ({ id, user, text, image, date_created }: any) => {
	const [ratio, setRatio] = useState(0);
	Image.getSize(image, (width: number, height: number) => setRatio(width / height));
	return (
		<Component>
			<Content>
				<Left>
					{/* <FollowBtn>
						<IconF name="plus" size={15} color={bgColor} />
					</FollowBtn> */}
					<UserImg />
					<VLine />
					<UserImg width={15} />
				</Left>
				<Right>
					<Head>
						<Username>{user.username}</Username>
						<Info>
							<Time>{date_created}</Time>
							<IconE name="dots-three-horizontal" size={20} color={textColor} />
						</Info>
					</Head>
					<Body>
						<Text>{text}</Text>
						<ImgContainer style={{ aspectRatio: ratio }}>
							<Img source={{ uri: image }} />
						</ImgContainer>
						<Actions>
							<IconI style={{ marginRight: 10 }} name="heart-outline" size={30} color={textColor} />
							<IconI style={{ marginRight: 10, transform: [{ rotateY: "180deg" }] }} name="chatbubble-outline" size={25} color={textColor} />
							<IconF style={{ marginRight: 10 }} name="repeat" size={24} color={textColor} />
							<IconI style={{ marginRight: 10 }} name="paper-plane-outline" size={25} color={textColor} />
						</Actions>
					</Body>
					<Foot>
						<Reactions>2 replies · 29 likes</Reactions>
					</Foot>
				</Right>
			</Content>
			<HLine />
		</Component>
	);
};

export default Post;

const Component = styled.View`
	margin-top: 10px;
`;
const Content = styled.View`
	margin: 0 ${gap};
	flex-direction: row;
`;
const Left = styled.View`
	align-items: center;
	justify-content: space-between;
`;
const FollowBtn = styled.View`
	border-radius: 9999px;
	background-color: ${textColor};
	align-items: center;
	justify-content: center;
	width: 20px;
	aspect-ratio: 1;
	z-index: 1;
	position: absolute;
	top: 33px;
	border: 2px solid ${bgColor};
	right: 0;
`;
const VLine = styled.View`
	flex: 1;
	background-color: ${secondaryColor}77;
	width: 2px;
	border-radius: 9999px;
	margin: 10px 0;
`;
const Right = styled.View`
	flex: 1;
	margin-left: 10px;
`;
const Head = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const Username = styled.Text`
	font-size: 18px;
	color: ${textColor};
`;
const Info = styled.View`
	flex-direction: row;
`;
const Time = styled.Text`
	color: ${secondaryColor};
	margin-right: 10px;
`;
const Body = styled.View``;
const Text = styled.Text`
	color: ${textColor};
	font-size: 18px;
	margin: 10px 0;
`;
const ImgContainer = styled.View`
	border-radius: 10px;
	overflow: hidden;
`;
const Img = styled.Image`
	width: 100%;
	height: 100%;
`;
const Actions = styled.View`
	flex-direction: row;
	align-items: center;
	margin: 10px 0;
`;
const Foot = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const Reactions = styled.Text`
	color: ${secondaryColor};
	font-size: 18px;
`;
const HLine = styled.View`
	width: 100%;
	background-color: ${secondaryColor}55;
	height: 1px;
	border-radius: 9999px;
	margin-top: 10px;
`;
