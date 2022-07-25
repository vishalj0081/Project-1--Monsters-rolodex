// import {Component} from 'react';
import 'C:/Users/visha/monsters-rolodex/src/Components/Card/card.styles.css';

const Card = ({Monsters}) => {
const {name, id, email}= Monsters;
       
return(
        <div className='card-container'key={id}>
        <img 
        alt={`Monsters ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
       <h2> {name}</h2>
       <p> {email}</p>
       </div>
       )

        
    }

export default Card;