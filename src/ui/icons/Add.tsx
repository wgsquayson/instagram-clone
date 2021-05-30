import React from "react";
import { Svg, Path, Rect } from "react-native-svg";

const Add: React.FC = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path fill="#000" d="M0 0h24v24H0z" />
            <Rect
                width={18}
                height={18}
                x={3}
                y={3}
                stroke="#FFF"
                strokeWidth={1.8}
                rx={5}
            />
            <Path
                stroke="#FFF"
                strokeLinecap="round"
                strokeWidth={1.8}
                d="M12.1 6.9v10.2m-5.2-5.3h10.2"
            />
        </Svg>
    )
};

export default Add;