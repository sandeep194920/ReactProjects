import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import './index.css'
const url = 'https://course-api.com/react-tours-project'

function Tours() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [tours, setTours] = useState([])

    const getTours = async () => {
        try {
            const response = await fetch(url)
            if (!(response.status >= 200 && response.status <= 299)) {
                console.log(response.status)
                setError(true)
                throw new Error(response.statusText)
            }
            const tours = await response.json()
            setTours(tours)
            setLoading(false)
            setError(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTours()
    }, [])

    const removeHandler = (id) => {
        const updatedTours = tours.filter(tour => tour.id !== id)
        setTours(updatedTours)
    }

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>Error...</h3>
    }

    return (
        <main className="container">
            <h1 className="heading">Our Tours</h1>
            {tours.map(tour => {
                return <Card key={tour.id} {...tour} remove={removeHandler} />
            })}

        </main>
    )
}

export default Tours
