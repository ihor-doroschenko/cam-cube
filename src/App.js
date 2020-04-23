import React from 'react';
import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import Content from './components/Content/Content.js'
import './App.css';

class App extends React.Component {

  state = {
    componentSwitcher: "Ziel",
    menuItems: [
      {id: 1, text: "Hauptziel des Projektes", value: "Ziel"},
      {id: 2, text: "Projekt- und Zeitplan", value: "Zeitplan"},
      {id: 3, text: "CamCube", value: "CamCube"},
      {id: 4, text: "Infrastruktur", value: "Infrastruktur"},
      {id: 5, text: "Geschichte der Aerosolbeobachtungen", value: "Geschichte"}
    ]
}

switchComponents = (value) => {
    this.setState({
        componentSwitcher: value
    })
}

  render() {
    return (
      <div className="app-wrapper">
        <Header switchComponents={this.switchComponents} menuItems={this.state.menuItems}/>
        <Main />
        <Content actualComponent={this.state.componentSwitcher}/>
      </div>
    )
  }
}

export default App;
