import React from "react"


export default function Layout({children}:{
    children:React.ReactNode
}){
    return<div>
    <div>
        20% off for the next few days
    </div>
    {children}
    </div>
}