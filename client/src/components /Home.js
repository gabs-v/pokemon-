import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Home = props => {
    const [dadResponse,setDadResponse] = useState(null)
    useEffect(() => {
        axios.get('https://dad-jokes.p.rapidapi.com/random/joke/png')
        .then((res) => {setDadResponse('response.data')})
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Dad Jokes</h1>
            <h3>Need a pick me up? Here's a dad joke. Havin a good day? Make it even a better day with a dad joke!
            </h3>
        </div>
    )
}

export default Home