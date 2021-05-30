import React from "react";
import { Svg, Circle } from "react-native-svg";

const More: React.FC = () => {
    return (
        <Svg
            width={15}
            height={3}
            fill="none"
            viewBox="0 0 15 3"
        >
            <Circle cx={2.3} cy={1.5} r={1.5} fill="#FFF" />
            <Circle cx={7.8} cy={1.5} r={1.5} fill="#FFF" />
            <Circle cx={13.3} cy={1.5} r={1.5} fill="#FFF" />
        </Svg>
    )
};

export default More;