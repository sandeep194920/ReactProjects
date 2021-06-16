import React from 'react'
const data = [{ id: 1, question: 'Who is chanakya', ans: 'I dont know' }, { id: 2, question: 'Who is Koutilya', ans: 'I  know' }]
function TestAccordion() {
    const [toggle, setToggle] = React.useState(null) // which one to show - null (don't show anything initially)

    const handleToggle = (id) => {
        if (id === toggle) {
            return setToggle(null)
        }
        setToggle(id)
        console.log(id)
    }

    return (
        <div>
            {data.map(d => {
                return (
                    <div key={d.id}>
                        <div style={{ justifyContent: 'space-around', display: 'flex' }}>
                            <h1>{d.question}</h1>
                            <h2 onClick={() => handleToggle(d.id)}>+</h2>
                        </div>
                        {toggle === d.id && < p > {d.ans}</p>}
                    </div>
                )
            })}
        </div >
    )
}

export default TestAccordion
