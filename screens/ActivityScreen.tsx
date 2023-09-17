import { styled } from "styled-components/native";
import { activityTabs, bgColor, gap, secondaryColor, textColor } from "../utils/constants";
import { Activity, Tabs } from "../components";
import { useState } from "react";

const ScrollTabs = () => {
	const [activeTab, setActiveTab] = useState("All");
	return (
		<Component horizontal showsHorizontalScrollIndicator={false}>
			{activityTabs.map((tab: string, idx: number) => (
				<Btn style={[activeTab === tab && { borderColor: bgColor, backgroundColor: textColor }, idx + 1 < activityTabs.length && { marginRight: 10 }]} onPress={() => setActiveTab(tab)} key={idx}>
					<BtnText style={activeTab === tab && { color: bgColor }}>{tab}</BtnText>
				</Btn>
			))}
		</Component>
	);
};

const Component = styled.ScrollView``;
const Btn = styled.Pressable`
	padding: 10px 20px;
	border: 1px solid ${secondaryColor};
	border-radius: 10px;
	margin-bottom: 10px;
`;
const BtnText = styled.Text`
	color: ${textColor};
`;

const ActivityScreen = () => {
	return (
		<>
			<Screen>
				<Title>Activity</Title>
				<ScrollTabs />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
				<Activity />
			</Screen>
			<Tabs activeIcon="Heart" />
		</>
	);
};

export default ActivityScreen;

const Screen = styled.ScrollView`
	flex: 1;
	padding: 0 ${gap};
`;
const Title = styled.Text`
	color: ${textColor};
	font-size: 30px;
	margin: 10px 0;
`;
