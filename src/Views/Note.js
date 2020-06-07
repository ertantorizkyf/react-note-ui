import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"
import { useAxiosGet } from "../Hooks/NoteHttpRequest"
import { Link } from "react-router-dom"
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiUrl } from "../Constants"

function Note(){
    const { id } = useParams()
    const url = `${apiUrl}/note/${id}`

    let note = useAxiosGet(url)

    let content = null

    if(note.loading){
        content = <Loader></Loader>
    }

    if(note.data && !note.data.Message){
        content =
        <div>
            <p className="font-bold text-xl">{note.data.Title} <Link to="/" className="font-normal text-sm text-blue-500"><FontAwesomeIcon icon={ faArrowAltCircleLeft } /> back to home</Link></p>
            <p>{ note.data.Body }</p>
        </div>   
    }

    if(note.data && note.data.Message){
        content = <p>{ note.data.Message }</p>
    }

    return (
        <div>
            { content }
        </div>
    )
}

export default Note;
