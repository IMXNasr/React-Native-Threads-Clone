import { Path, Svg } from "react-native-svg";
import { secondaryColor, tabIconSize, tabIconStrokeWidth, textColor } from "../utils/constants";

const Home = ({ size = tabIconSize, active }: { size?: number; active?: boolean }) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke={active ? textColor : secondaryColor} strokeWidth={tabIconStrokeWidth} strokeLinecap="round" strokeLinejoin="round" />
			<Path d="M22 22L20 20" stroke={active ? textColor : secondaryColor} strokeWidth={tabIconStrokeWidth} strokeLinecap="round" strokeLinejoin="round" />
		</Svg>
	);
};

export default Home;
