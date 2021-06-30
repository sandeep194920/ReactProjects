import React, { useState, useEffect } from 'react'
import './index.css'
import List from './List'
import Modal from './Modal'

const getLocalStorage = () => {
    let items = localStorage.getItem('items')
    if (items) {
        return JSON.parse(items)
    }
    return []
}

function App() {
    const [items, setItems] = useState(getLocalStorage);
    const [item, setItem] = useState('');
    const [isEditing, setIsEditing] = useState(false)
    // to know which item is being edited
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({ show: false, msg: '', success: true })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!item) {
            return setAlert({ ...alert, success: false, show: true, msg: `Please enter an item` })
        }
        if (isEditing) {
            // editing
            const updatedItems = items.map(myitem => {
                if (myitem.itemId === editId) {
                    return { ...myitem, name: item }
                }
                return myitem
            })
            setItems(updatedItems)
            setAlert({ show: true, msg: 'Item modified', success: true })
            setIsEditing(false)
            setEditId(null)
            return setItem('')
        }
        else {
            // id++;
            setItems([...items, { itemId: new Date().getTime().toString(), name: item }])
            setItem('')
            setAlert({ ...alert, show: true, msg: `${item} added to the list` })
        }

    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert({ ...alert, show: false })
        }, 3000)
        return (() => clearTimeout(timeout))
    }, [items, alert])

    //we store the items in localstorage whenever the items change
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    useEffect(() => {
        console.log(items)
    }, [items])

    const clearItems = () => {
        setAlert({ show: true, success: false, msg: 'Your list is cleared' })
        setItems([])
    }
    const editItem = (editId) => {
        const item = items.find(item => item.itemId === editId)
        setIsEditing(true)
        console.log(item.name)
        setItem(item.name)
        setEditId(editId)
    }
    const removeItem = (id) => {
        let { name } = items.find((item) => item.itemId === id)
        setAlert({ show: true, success: false, msg: `${name} removed` })
        setItems(prevItems => prevItems.filter(item => item.itemId !== id))
    }

    return (
        <main>
            <section className="section-center">
                <form onSubmit={handleSubmit} className="grocery-form">
                    {alert.show && <Modal {...alert} />}
                    <h3>grocery list</h3>
                    <div className="form-control">
                        <input type="text" className="grocery" placeholder="eg. Eggs" value={item} onChange={({ target }) => setItem(target.value)} />
                        <button className="submit-btn" type="submit">{isEditing ? 'Edit' : 'Submit'}</button>
                    </div>
                    <div className="grocery-container">
                        {items.length > 0 && <div className="grocery-list">
                            {items.map(item => {
                                return (
                                    <List edit={editItem} remove={removeItem} key={item.itemId} {...item} />
                                )
                            })}
                            <button onClick={clearItems} className="clear-btn">Clear Items</button>
                        </div>

                        }
                    </div>
                </form>
            </section>
        </main>
    )
}

export default App
