import { styled } from "styled-components/native";
import { UserImg } from ".";
import { secondaryColor, textColor } from "../utils/constants";

const Activity = () => {
	return (
		<Component>
			<UserImg width={40} />
			<Info>
				<Texts>
					<Username>
						itsimoox <Time>7w</Time>
					</Username>
					<ActionText>Followd you</ActionText>
				</Texts>
				<Btn onPress={() => console.log("Follow")}>
					<BtnText>Follow</BtnText>
				</Btn>
			</Info>
		</Component>
	);
};

export default Activity;

const Component = styled.View`
	flex-direction: row;
	align-items: center;
`;

const Info = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	margin-left: 10px;
	border-bottom-width: 1px;
	border-bottom-color: ${secondaryColor}77;
`;
const Texts = styled.View``;
const Username = styled.Text`
	font-size: 16px;
	color: ${textColor};
	margin-bottom: 5px;
`;
const Time = styled.Text`
	font-size: 12px;
	color: ${secondaryColor};
`;
const ActionText = styled.Text`
	font-size: 12px;
	color: ${secondaryColor};
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
