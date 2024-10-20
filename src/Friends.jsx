
import Friend from './Friend';
import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends(){
    const [friends, setFriends] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>

            {
                friends.map(friend => <Friend></Friend>)//error khaisi pore dekhtesi bara
            }
           
        </div>
    )
}



/**
 * 1.declare a State to hold the data
 * 2.useEffects with call back and dependency array
 * 3.use fetch to load data
 * 4.set loaded data to the state
 * 5.display data on the component
 * 
 */