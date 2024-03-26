import useUserContext from "../context/userContext"

const HeadingComponent = (data) => {
    const {color} = useUserContext();
    return (
        <>
            <div className="fadedLabel">
                {data.data.label}
                <h2 className="heading" style={{textDecorationColor:color}}>{data.data.heading}</h2>
            </div>
        </>
    )
}

export default HeadingComponent