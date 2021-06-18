import React, { useRef, useEffect, useState } from 'react'
import './index.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { data } from './data';

function App() {
    const inputRef = useRef(null);
    const contentRef = useRef(null);
    const [paraCount, setParaCount] = useState(0);
    const [copyEnabled, setCopyEnabled] = useState(false);
    const [mydata, setMyData] = useState([]);
    const [copyMessage, setCopyMessage] = useState(false)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleInput = (e) => {

        setCopyEnabled(() => e.target.value <= 0 ? false : true)
        setParaCount(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let paras = data.slice(0, paraCount);
        if (paraCount > paras.length) {
            while (paraCount >= paras.length) {
                for (const ele of data) {
                    paras.push(ele)
                }
            }
            console.log(paras.length, "before")
            paras = paras.slice(0, paraCount)
            console.log(paras.length, "After")
        }
        setMyData(paras)
    }

    const copyHandler = () => {
        setCopyMessage(true)
        setTimeout(() => {
            setCopyMessage(false)
        }, 2000)
    }


    return (
        <main>
            <h2>Bored or Lorem Ipsum? Here's some cool text for you <span>😎😎</span>
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="paraCount">Paragraphs : </label>
                <input ref={inputRef} type="number" id="paraCount" onChange={handleInput} value={paraCount} min="1" />
                <button type="submit">Generate</button>
                <CopyToClipboard text={mydata}>
                    <button onClick={copyHandler} className={!copyEnabled ? 'disabled' : ''} disabled={!copyEnabled} type="button">Copy Text!</button>
                </CopyToClipboard>
                {copyMessage ? <span className="copied">Copied 😃</span> : ''}
            </form>


            <section ref={contentRef}>
                {mydata.map((para, index) => {
                    return <p key={index}>{para}</p>
                })}
            </section>
        </main >
    )
}

export default App
