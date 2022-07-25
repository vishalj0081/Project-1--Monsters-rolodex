//import {Component} from 'react';

import { useState, useEffect } from 'react';
import CardList from './Components/Card-List/CardList.component';
import SearchBox from './Components/Search-box/search-box.component';
import './App.css';

const App = ()=> {
const [searchField, setSearchField] = useState('');
const [Monsters, setMonsters] = useState([]);
const [FilteredMonsters, setFilterMonsters] = useState(Monsters);
const [EmailSearch, setemailsearch ] =useState('');

const OnSearchChange =(event)=> {
const searchFieldstring = event.target.value.toLocaleLowerCase();
setSearchField(searchFieldstring);
 };

 const OnSearchEmail =(event) => {
const Emailsearchstring = event.target.value.toLocaleLowerCase();
setemailsearch(Emailsearchstring);
 }


 useEffect(() => {
 fetch ('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.json())
 .then((users) => setMonsters(users));
 }, []);

 console.log('rendered');
 useEffect(() => {
  const newFilteredMonsters = Monsters.filter((Monsters) => {
    return Monsters.name.toLocaleLowerCase().includes(searchField);
  });
  setFilterMonsters(newFilteredMonsters);
 }, [Monsters, searchField]);

 useEffect(() => {
  const newFilteredMonsters = Monsters.filter((Monsters) => {
    return Monsters.email.toLocaleLowerCase().includes(EmailSearch);
  });
  setFilterMonsters(newFilteredMonsters);
 }, [Monsters, EmailSearch]);

  return ( 

    <div className = 'App'>
      <h1 className='App-title'> MONSTERS ROLODEX </h1>

    <SearchBox
    className = 'Monsters-Search-box'
    OnChangeHandler={OnSearchChange}
    placeholder='Search Monsters'/>
    <div>  
    <SearchBox 
    className = 'Search-Email'
    OnChangeHandler ={OnSearchEmail}
    placeholder= 'SearchbyEmail' />
          </div>
   <CardList Monsters={FilteredMonsters}/>
     </div>
    
  );
  }



   /*class App extends Component {
   constructor() {
     super();

     this.state = {
     Monsters: [],
    searchField: ''       
     };
     console.log('constructor');
   }

   componentDidMount() {
     console.log('componentDidMount');
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
    this.setState(
       () =>    {
   return {Monsters: users};
     },
     () => {
      console.log(this.state);
     }
     )
     );
   }

OnSearchChange = (event)=> {
  console.log(event.target.value);
  const searchField = event.target.value.toLocaleLowerCase();

this.setState(()=>
{
return{searchField};
}
)
}

   render() {
     console.log('render');

const { Monsters, searchField } = this.state;
const {OnSearchChange} = this;

     const filteredmonsters = Monsters.filter((Monsters)=>{
      return Monsters.name.toLocaleLowerCase().includes(searchField);
          });

    return ( 
    <div className = 'App'>
      <h1 className='App-title'> MONSTERS ROLODEX </h1>
    <SearchBox
    className = 'Monsters-Search-box'
    OnChangeHandler={OnSearchChange}
     placeholder={'Search Monsters'}/>
      <CardList Monsters={filteredmonsters}/>
       </div>
    );
    }
  } */

  export default App;
