import { Circle, Path, Svg } from "react-native-svg";
import { secondaryColor, tabIconSize, tabIconStrokeWidth, textColor } from "../utils/constants";

const User = ({ size = tabIconSize, active }: { size?: number; active?: boolean }) => {
	return (
		<>
			{active ? (
				<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
					<Circle cx="12" cy="6" r="4" fill={textColor} strokeWidth={tabIconStrokeWidth} />
					<Path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" fill={textColor} strokeWidth={tabIconStrokeWidth} />
				</Svg>
			) : (
				<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
					<Circle cx="12" cy="6" r="4" stroke={secondaryColor} strokeWidth={tabIconStrokeWidth} />
					<Path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke={secondaryColor} strokeWidth={tabIconStrokeWidth} />
				</Svg>
			)}
		</>
	);
};

export default User;
