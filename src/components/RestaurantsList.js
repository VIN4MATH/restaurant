import React, { Component } from 'react';
import NavBar from './NavBar';
import { Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from 'react-router-dom';

class RestaurantsList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,

        }
    }
    componentDidMount() {
      this.getData()
    }

    getData()
    {
        fetch("http://localhost:3000/restaurant").then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                this.setState({ list: result })
            })
        })
    }
    Delete(id) {
        fetch("http://localhost:3000/restaurant/" + id,
            {

                method: "Delete",
                headers: {
                    'Content-type': 'application/json'
                },
                
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Details has been Deleted")
                    this.getData()
                })
            })
    }
    render() {
        return (
            <div>
                <NavBar/>
                <Container>
                
                <h1> Restaurants List</h1>
                
                {
                    this.state.list ?
                        <div>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>


                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td><Link to={"/Update/" + item.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                                    <span
                                                        onClick={() => this.Delete(item.id)}>
                                                        <FontAwesomeIcon icon={faTrash} color="red" />
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>

                        </div>
                        : <p>Please Wait</p>


                }
            </Container>

            </div>
            
        )
    }
}
export default RestaurantsList;
