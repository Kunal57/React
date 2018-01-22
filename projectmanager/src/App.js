import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  // Usually we fetch data from an API but we'll use a state to store our data
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  // You can define the state and the keys in this component but not the actual data. For that you want to use a LifeCycle method
  // LifeCycle Method fires off every time a component is re-rendered
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design',
      },
      {
        title: 'Social App',
        category: 'Mobile Development',
      },
      {
        title: 'Ecommerce Shopping Card',
        category: 'Web Development',
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
