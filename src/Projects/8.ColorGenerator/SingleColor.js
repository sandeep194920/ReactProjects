import React, { useState, useEffect } from 'react'
import './index.css'

function SingleColor({ hex, weight, type }) {
    const [alert, setAlert] = useState(false)
    const hexValue = `#${hex}`
    const style = [`color, ${(type === "shade") ? 'shade' : ''}`];

    const copyColor = () => {
        setAlert(true)
        // COPY TO CLIPBOARD 
        navigator.clipboard.writeText(hexValue)
        // We can do the below or inside the useEffect like we've done
        // const interval = setTimeout(() => {
        //     setAlert(false)
        //     clearTimeout(interval)
        // }, 1500);
    }

    useEffect(() => {
        console.log("UeEFf")
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 1500)
        return (() => clearTimeout(timeout))
    }, [alert])

    return (
        <article
            onClick={copyColor}
            style={{ backgroundColor: `#${hex}` }}
            className={style}
        >
            <div className="color-info">
                <p>{`${weight}%`}</p>
                <br />
                <h5>{hexValue}</h5>
            </div>
            <br />
            {alert && <h5 style={{ color: "green", fontWeight: 'bold' }}>Copied to Clipboard!</h5>}
        </article>
    )
}

export default SingleColor
