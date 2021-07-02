import React, { useRef, useEffect } from 'react'
import logo from './mylogo.png';
import './index.css'
import { links, social } from './data'
import { GiHamburgerMenu } from 'react-icons/gi'

const App = () => {
    // useState absolutely works. But it shows and hides the 
    // list container instantly without a smooth effect. 
    // That's why we can use useRef along with useState to set the height 
    const [showLinks, setShowLinks] = React.useState(true)
    const listContainerRef = useRef(null) //links container ref
    const listRef = useRef(null) // links ref

    // the idea is, we set the links container height to the 
    // links height. If links height becomes 0 then we set that 
    // to links container height. This way we get a smooth transition 
    // on toggling the navbar in responsive mode

    useEffect(() => {
        const height = listRef.current.getBoundingClientRect().height;
        if (showLinks) {
            listContainerRef.current.style.height = `${height}px`;
        } else {
            listContainerRef.current.style.height = `0px`;
        }
    }, [showLinks])

    return <nav>
        <div className="logo-toggle-container">
            <img src={logo} alt="logo" />
            <GiHamburgerMenu className="icon" onClick={() => setShowLinks(!showLinks)} />
        </div>
        {/* The below commented line uses useState which doesnt give us the smooth effect of hiding list container on click. So we are using useRef */}
        <div className={`links-container`} ref={listContainerRef}>
            {<ul ref={listRef} className={`list-container`}>
                {/* {listContainerRef && <ul ref={listContainerRef} className={`list-container show-container`}> */}
                {links.map(link => {
                    const { id, url, text } = link
                    return (
                        <li key={id}><a href={url}>{text}</a></li>
                    )
                })}
            </ul>}
        </div>
        <ul className={`list-container icon-container`}>
            {social.map(link => {
                const { id, url, icon } = link
                return (
                    <a key={id} href={url}>
                        {icon}
                    </a>
                )
            })}
        </ul>
    </nav>
}

export default App