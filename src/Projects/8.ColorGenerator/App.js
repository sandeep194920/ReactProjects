import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor';
import Values from 'values.js'
import './index.css';

function App() {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState([])

    const getColors = (color) => {
        try {
            const colors = new Values(color).all(10) // 10 is the value where the main color will be dividing 10 times (100 of color/10) to get tints and shades. If you divide by 1 then you get 100 colors of tint and 100 colors of shades
            console.log(colors)
            setList(colors)
        } catch (err) {
            console.log(err.message)
            setError(true)
        }
    }
    // setting up a default color for initial render and page refresh
    useEffect(() => {
        getColors("#40944b")
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        getColors(color)
    }

    return (
        <>
            <section className="container">
                <h2 className="heading">Hex Color Generator</h2>
                <form onSubmit={handleSubmit}>
                    <input className={error ? "error" : null} placeholder="#54168f" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} hex={color.hex} />
                })}
            </section>
        </>
    )
}

export default App
