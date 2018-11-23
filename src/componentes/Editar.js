import React, { Component } from 'react';

class Editar extends Component {
    tituloRef = React.createRef();
    entradaRef = React.createRef();
    editarPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1,
            id: this.props.post.id
        }

        //console.log(post);
        this.props.editarPost(post);
    }
    cargarFormulario = () => {
        if(!this.props.post) return null;

        const {title, body} = this.props.post;

        return (
            <form onSubmit={this.editarPost} className="col-8" key={this.props.id}>
                <legend className="text-center">Editar Post</legend>
                <div className="form-group">
                    <label>Titulo del Post:</label>
                    <input defaultValue={title} type="text" ref={this.tituloRef} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea className="form-control" ref={this.entradaRef}> </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        )
    }
    render() {
        
        return (
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
        )
    }
}

export default Editar;