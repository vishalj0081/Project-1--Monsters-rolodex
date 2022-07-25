//import { Component } from 'react';

import 'C:/Users/visha/monsters-rolodex/src/Components/Card-List/card-list.styles.css';
import Card from '../Card/Card.component';

const CardList = ({ Monsters }) => (
    <div className='card-list'>
      {Monsters.map((Monsters) => {
        return <Card key={Monsters.id} Monsters={Monsters} />;
      })}
    </div>
  );
  
  
export default CardList;