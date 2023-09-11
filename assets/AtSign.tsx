import { Circle, Path, Svg } from "react-native-svg";
import { textColor } from "../utils/constants";

const AtSign = ({ size = 60 }) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={textColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
			<Path d="m10.25 8c0 3.25 4 3.25 4 0 0-3.45178-2.7982-6.25-6.25-6.25-3.45178 0-6.25 2.79822-6.25 6.25s2.79822 6.25 6.25 6.25c2.25 0 3.25-1 3.25-1" />
			<Circle cx="8" cy="8" r="2.25" />
		</Svg>
	);
};

export default AtSign;
