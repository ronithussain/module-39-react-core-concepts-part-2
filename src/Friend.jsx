export default function Friend({friend}){
   const {name,email} = friend;
    return(
        <div style={{border:'2px solid purple', background:'gray', color:'white', margin:'5px', borderRadius:'15px'}}>
            <h3>Name:{name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}