import React, { Component } from "react";
import uuid from "uuid";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }

  static defaultProps = {
    categories: ["Comedia", "Romance", "Suspense"]
  };

  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("O Titulo e necessario");
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {
          //  console.log(this.state);
          this.props.addProject(this.state.newProject);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div className="AddProject">
        <h3>Adicionar um projeto</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label htmlFor="">Titulo</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <br />
          <div>
            <label htmlFor="">Categoria</label>
            <br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <br />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default AddProject;
