import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)


    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
       setTeam(team-1)
    }

    const teamStyle = {
        border: '2px solid purple',
        padding: '15px',
        margin: '15px',
        borderRadius:'15px',
        backgroundColor: 'magenta'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <div style={{display:'flex', justifyContent:'center', gap:'15px'}}>
            <button style={{background:'red'}} onClick={handleAdd}>Add</button>
            <button style={{background:'yellow'}} onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}