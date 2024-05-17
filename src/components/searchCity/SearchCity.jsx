import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import InputWithSuggestions from "../form/inputWithSuggestions/InputWithSuggestions"

export default function SearchCity(props) {
    const router = useRouter()
    const [searchText, setSearchText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const fetchCitiesList = async () => {
        const CITIES_LIMIT = 5
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
        const json = await response.json()
        handleList(json)
    }

    const handleList = (list) => {
        const formattedList = list.map((obj) => ({
            text: `${obj.name}, ${obj.state}, ${obj.country}`,
            onClick: () => router.push(`/info/${obj.lat}/${obj.lon}`)
        }))
        setSuggestions(formattedList)
    }

    useEffect(() => {
        if (searchText.length >= 3) fetchCitiesList()
        else setSuggestions([])
    }, [searchText])

    return(
        <InputWithSuggestions
            placeholder="Digite o nome da cidade"
            {...props}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            suggestions={suggestions}
        />
    )
}