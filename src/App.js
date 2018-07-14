import React, { Component } from "react";
import "./App.css";
import uuid from "uuid";
import Project from "./components/Project";
import AddProject from "./components/AddProject";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  getToDos() {}

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "O urso Panda Amarelo",
          category: "Humor"
        },
        {
          id: uuid.v4(),
          title: "Chaves o menino que mora no barril",
          category: "Comedia"
        },
        {
          id: uuid.v4(),
          title: "Lagoa Azul",
          category: "Romance"
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }

  handleAddProject(project) {
    // console.log(project);
    let projetos = this.state.projects;
    projetos.push(project);
    this.setState({ projects: projetos });
  }

  handleDeleteProject(id) {
    // console.log('tentei ' + id);
    let projetos = this.state.projects;
    let index = projetos.findIndex(x => x.id === id);
    projetos.splice(index, 1);
    this.setState({ projects: projetos });
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Project
          onDelete={this.handleDeleteProject.bind(this)}
          projects={this.state.projects}
        />
        {/* <Project lucas={"Ola Mundo"}/> Passando atributos para o componente */}
      </div>
    );
  }
}

export default App;
