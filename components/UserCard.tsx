import { styled } from "styled-components/native";
import { UserImg } from ".";
import { secondaryColor, textColor } from "../utils/constants";

const UserCard = () => {
	return (
		<Component>
			<UserImg width={40} />
			<Info>
				<Top>
					<Texts>
						<Username>itsimoox</Username>
						<Name>Followd you</Name>
					</Texts>
					<Btn onPress={() => console.log("Follow")}>
						<BtnText>Follow</BtnText>
					</Btn>
				</Top>
				<Followers>1.8M followers</Followers>
			</Info>
		</Component>
	);
};

export default UserCard;

const Component = styled.View`
	flex-direction: row;
  margin-top: 10px;
`;
const Info = styled.View`
	flex: 1;
	margin-left: 20px;
	border-bottom-color: ${secondaryColor}55;
	border-bottom-width: 1px;
	padding-bottom: 20px;
`;
const Top = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	/* padding: 10px; */
`;
const Texts = styled.View``;
const Username = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${textColor};
`;
const Name = styled.Text`
	font-size: 12px;
	color: #808080;
`;
const Btn = styled.Pressable`
	padding: 5px 20px;
	border-radius: 10px;
	border: 1px ${secondaryColor};
`;
const BtnText = styled.Text`
	color: ${textColor};
	font-size: 16px;
`;
const Followers = styled.Text`
	color: ${textColor};
`;
