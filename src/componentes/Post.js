import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

class Post extends Component {

    confirmarEliminacion = () => {

        const {id} = this.props.info;

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value === true) {
                console.log(result.value);
                this.props.borrarPost(id)
                swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

        
    }
    render() {
        const {id, title} = this.props.info;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
                    <button onClick={this.confirmarEliminacion} type="button" className="btn btn-danger">Borrar</button>
                </td>
            </tr>
        )
    }
}

export default Post;