const HeadingComponent = (data) => {
    return (
        <>
            <div className="fadedLabel">
                {data.data.label}
                <h2 className="heading">{data.data.heading}</h2>
            </div>
        </>
    )
}

export default HeadingComponent