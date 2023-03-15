import { useState } from 'react'


export const Form = () => {
    const heading = {
        fontSize : '72px',
        color : 'blue'
    }
    const [ username, setUsername ] = useState('')
    const [story, setStory] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault(); 
        var idOfEvent= event.target[0].id;
        if(idOfEvent === 'username'){
            alert(`A name was submitted: ${username}`)
        } else if(idOfEvent === 'story'){
            alert(`A story was submitted: ${story}`)
        } else if(idOfEvent === 'countries'){
            alert(`A country was submitted: ${country}`)
        }
    }
    return (
        <div>
            <h1 style={ heading }> Username input </h1>
            <div>
                <form onSubmit={ handleSubmit }>
                    <div>
                    <label>Username</label>
                    <input 
                        type='text' 
                        id='username'
                        value={ username } 
                        onChange={(change) => {
                            setUsername(change.target.value) 
                        }} />
                    </div>
                <button type='submit'> Submit </button>
                    </form>
            </div>
            <h1 style={ heading }> Story input </h1>
            <div>
                <form onSubmit={ handleSubmit }> 
                    <div>
                    <label for='story'>Tell us your story:</label>
                    <textarea 
                        id='story'
                        name='story'
                        rows='5'
                        cols='33'
                        onChange={(change) => {
                            setStory(change.target.value)
                        }}>
                    </textarea>
                    </div>
                <button for='story' type='submit'> Submit </button>
                </form>
            </div>
            <h1 style={ heading }> Select input </h1>
            <div>
                <form onSubmit={ handleSubmit }>
                    <div>
                        <label for='countries'>Choose a country:</label>
                        <select 
                            id='countries' 
                            name='countries'
                            onChange={(change) => {
                                setCountry(change.target.value)
                            }}>
                            <option value=''>--Please choose an option--</option>
                            <option value='australia'>Australia</option>
                            <option value='canada'>Canada</option>
                            <option value='usa'>USA</option>
                            <option value='uk'>UK</option>
                        </select>
                    </div>
                    <button type='submit'> Submit country </button>
                </form>
            </div>
        </div>
    )
}
