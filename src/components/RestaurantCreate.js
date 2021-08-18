import React, { Component } from 'react'
import NavBar from './NavBar';
import "./Css components/create.css";

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            address: null,
            email: null,
            rating: null

        }
    }
    create() {
        fetch("http://localhost:3000/restaurant", {
            method: "post",
            headers:{
               'Content-type':'application/json' 
            },
            body: JSON.stringify(this.state)
        }).then ( (result) =>{
                result.json().then((resp) => {
                    alert("Details has been submitted")
                })
        })

    }
    render() {
        return (
            <div>
                <NavBar/>
                <h1> RestaurantCreate</h1>
                <br />
                <br />
                <div className="field">
                    <input className="input-field" onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" /> <br /> <br />

                    <input className="input-field" onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" /> <br /> <br />

                    <input className="input-field" onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant email" /> <br /> <br />

                    <input className="input-field" onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" /> <br /> <br />

                    <button className="create-button" onClick={() => { this.create() }}> ADD DETAILS </button>
                </div>
            </div>
        )
    }
}
export default RestaurantCreate;
