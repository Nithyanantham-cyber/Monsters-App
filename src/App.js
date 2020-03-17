import React,{Component} from 'react';

import {CardList} from './component/card-list/card-list.component';

import './App.css';

import { SearchBox } from './component/search-box/search-box.component.jsx';
class App extends Component{
 constructor(){
   super();

   this.state = {
     monsters : [],
     searchField: '' 

   };
 }

componentDidMount(){

  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users =>this.setState({ monsters:users }));
}  
  render(){

    const { monsters,searchField} =this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
          <div className="App">
            <h1> Monsters Inc</h1>
             <SearchBox
             placeholder='search monsters'
             handleChange={e =>this.setState({searchField: e.target.value })}
             />
            <CardList monsters = {filteredMonsters} />
          
          </div>
        );
      }
}

export default App;
