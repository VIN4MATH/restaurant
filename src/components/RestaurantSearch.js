import React, { Component } from 'react'
import NavBar from './NavBar';
import { Table, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from 'react-router-dom';


export default class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: "",
        }
    }
    search(key) {
        console.log(key);
        this.setState({ lastsearch: key })

        fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
            data.json().then((resp) => {
                // console.log("resp", resp)

                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }


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
                    this.search(this.state.lastSearch)
                })
            })
    }
    render() {
        return (
            <div>
                <NavBar />
                <Container>

                    <h1>Restaurant Search</h1>
                    <br />
                    <br />


                    <Form.Control type="text" placeholder="Search Restaurant" onChange={(event) => { (this.search(event.target.value)) }} />

                    <div>
                        {
                            this.state.searchData ?
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
                                                this.state.searchData.map((item) =>
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
                                : " "
                        }
                        <br />
                        <br />
                        {
                            this.state.noData ? <h3>No Data Found</h3> : null
                        }
                    </div>
                </Container>
            </div>

        )
    }
}
