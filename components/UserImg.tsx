import { styled } from "styled-components/native";

const UserImg = ({ width = 50 }: { width?: number }) => {
	return (
		<Container width={width}>
			<Img source={require("../assets/default_profile.png")} />
		</Container>
	);
};

export default UserImg;

const Container = styled.View<{ width: number }>`
	width: ${(props) => props.width}px;
	aspect-ratio: 1;
	border-radius: 9999px;
	overflow: hidden;
`;
const Img = styled.Image`
	width: 100%;
	height: 100%;
`;
