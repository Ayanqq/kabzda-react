import React, {useState} from "react";

export default {
    title: 'React.memo Demo'
}

type NewMessagesCounter = {
    counter:number
}

const NewMessagesCounter = (props: NewMessagesCounter) => {
    return <div>{props.counter}</div>
}


type UsersType = { users: Array<string> }
const UsersSecret = (props: UsersType) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ayan', 'Artem', 'Boris'])

    const addUserHandler = () => {
        const newUsers = [...users, 'Beka' + new Date().getTime()]
        users.push('Beka' + new Date().getTime())
        setUsers(newUsers)
    }

    return (
    <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={addUserHandler}>addUser</button>
        <NewMessagesCounter counter={counter}/>
        <Users users={users}/>
    </>
)
}

