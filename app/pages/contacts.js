import Link from 'next/link'
import Router, { useRouter } from 'next/router'

// create a function contacts
const mail_nico='nicolas.dreyfus@outlook.fr'
const mail_cyril='cyril.haubois@edu.ece.fr'
function Contacts() {
    return (
        <div>
        <h1>Contacts</h1>
        <p>This is the contacts page
            <br></br>
            Vous pouvez contacter les créateurs de cette page en cliquant sur leurs noms: <br></br>
           <a href="mailto:  {mail_nico}"> Nicolas</a> 
           <br></br>
           <a href="mailto:  {mail_cyril}"> Cyril</a> 
           
            
        </p>
        </div>
    )
    }
    export default Contacts