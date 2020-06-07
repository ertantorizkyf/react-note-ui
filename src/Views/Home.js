import React from "react"
import Loader from "../Components/Loader"
import { useAxiosGet } from "../Hooks/NoteHttpRequest"
import { Link } from "react-router-dom"
import { apiUrl } from "../Constants"

function Home(){
    const url = `${apiUrl}/note`
    let notes = useAxiosGet(url)
    let content = null

    if(notes.loading){
        content = <Loader></Loader>
    }

    if(notes.data && notes.data.length > 0){
        console.log(notes.data)
        content =
        notes.data.map((note) => 
            <div className="max-w-sm rounded overflow-hidden shadow-lg mr-3 bg-gray-300" key={ note.Id }>
                <div className="px-6 py-4">
                    <Link to={ "/note/" + note.Id } className="font-bold text-xl mb-2">{ note.Title }</Link>
                    <p className="text-gray-700 text-base">
                        { note.Body }
                    </p>
                </div>
            </div>
        )   
    }
    if(notes.data && notes.data.length === 0){
        content = 
        <p>No notes yet</p>
    }

    return (
        <div>
            <p className="text-purple-700 text-lg font-bold">This is home page</p>
            <div className="flex">
                { content }
            </div>
        </div>
    )
}

export default Home;
