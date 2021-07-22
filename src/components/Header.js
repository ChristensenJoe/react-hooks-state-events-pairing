
function Header({title, views, date}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{`${views} Views | Uploaded ${date}`}</p>    
        </>
    )
}

export default Header;