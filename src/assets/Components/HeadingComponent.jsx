/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const HeadingComponent = ({props}) => {
    const [color, setcolor] = useState('#44bbff');
    // console.log(props)
    const {label, heading} = props;
    return (
        <>
            <div className="fadedLabel">
                {label}
                <h2 className="heading" style={{textDecorationColor:color}}>{heading}</h2>
            </div>
        </>
    )
}

export default HeadingComponent