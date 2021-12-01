import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Counter from './Counter'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

class App extends Component {
  state = {
    characters: [
    {
      name: 'hihihihih',
      job: 'BAN BAN BAN!!! who s the Janitor here, we need to talk',
    },
    {
      name: 'CharlieChaplin',
      job: 'BAN BAN BAN!!! who s the Janitor here, we need to talk',
    },
    {
      name: 'MacnCheese',
      job: 'I am a Bouncer. AMA !!!',
    },
    {
      name: 'Lee',
      job: 'I am an Aspring actress in Hollywooood. Dont ask meanything' ,
    },
    {
      name: 'DennisRodmanS',
      job: 'Going to North Korea again. Wish you luck!',
    },
    ],
  }


  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state

    return (
      <>
{/* <Sidebar/>*/}
        <div className="container"  display= 'flex' min-height="100vh" flex-direction= "column">
          <h1>Welcome to 3.5Chan!</h1>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />      

          <header className="App-header">
            <div>
            { this.state.show?     <div id="panel"> <Form handleSubmit={this.handleSubmit} /> </div> : null}
            <button onClick={()=>{this.setState({show:!this.state.show})}}>
            { this.state.show? 'Cancel' : 'Create a Post'} </button>
            </div>
          </header>

        </div>
      </>
      )
  }
}

export default App