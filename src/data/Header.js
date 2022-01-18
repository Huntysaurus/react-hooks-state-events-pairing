import React from "react"

function Header({title, views, createdAt}) {
    return (
        <>
            <h1>{title}</h1>
            <span>{views} views | Uploaded {createdAt}</span>
        </>
    )
}

export default Header