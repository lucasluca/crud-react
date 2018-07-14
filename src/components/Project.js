import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Project extends Component {

  deleteProject (id) {
    // console.log(id);
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      // console.log('entrou');
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        )
      });
      // console.log(projectItems)
    }
    return (
      <div className="Project">
      <h3>Ultimos Projetos</h3>
        {projectItems}
        {/* <h1>{this.props.lucas}</h1> */}
      </div>
    );
  }

}


export default Project;
