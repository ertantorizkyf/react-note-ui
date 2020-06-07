import React, { useEffect, useState } from "react"
import axios from "axios"

export function useAxiosGet(url){
    const [notes, setNotes] = useState({
        loading: false,
        data: null
    })

    useEffect(() => {
        setNotes({
            loading: true,
            data: null
        })
        axios.get(url)
            .then(response => {
                setNotes({
                    loading: false,
                    data: response.data
                })
            })
    }, [url])

    return notes
}
