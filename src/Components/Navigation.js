import React from "react"
import { Link } from "react-router-dom"

function Navigation(){
    return (
        <nav>
            <Link to="/" className="text-blue-500 py-3 mr-4">Home</Link>
            <Link to="/"  className="text-blue-500 py-3">SupposedlyAnotherPages</Link>
        </nav>
    )
}

export default Navigation;
