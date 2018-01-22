import React, { Component } from 'react';
import uuid from 'uuid';
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
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design',
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development',
      },
      {
        id:uuid.v4(),
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

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({prijects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
