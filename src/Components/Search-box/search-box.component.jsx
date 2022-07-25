//import {Component} from 'react';
import 'C:/Users/visha/monsters-rolodex/src/Components/Search-box/search-box .Styles.css';
const SearchBox = ({className, placeholder, OnChangeHandler}) => (
     <input 
     className = {`search-box ${className}`}
     type = 'search'
     placeholder ={placeholder} 
     onChange= {OnChangeHandler} 
     
      />
        );
    
export default SearchBox;