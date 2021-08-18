import React, { Component } from 'react'
import NavBar from './NavBar';

export default class RestaurantUpdate extends Component {
    constructor() 
    {
        super();
        this.state= {
            name:null,
            email:null,
            address:null,
            rating:null,
            id:null,
        }
    }

    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((resp) =>{
            resp.json().then ( (result) => {
                // console.log(result)
                this.setState ({
                    name:result.name,
                    email:result.email,
                    address:result.address,
                    rating:result.rating,
                    id:result.id
                })
            })
        })
    }
    update()
    {
        fetch("http://localhost:3000/restaurant/"+this.state.id, {
            method: "put",
            headers:{
               'Content-type':'application/json' 
            },
            body: JSON.stringify(this.state)
        }).then ( (result) =>{
                result.json().then((resp) => {
                    alert("Details has been updated")
                })
        })

    }
    render() {
        
        return (
            <div>
                <h1>Restaurant Update</h1>
                <NavBar/>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" value={this.state.name} /> <br /> <br />

                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address"value={this.state.address} /> <br /> <br />

                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant email" value={this.state.email} /> <br /> <br />

                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating"  value={this.state.rating}/> <br /> <br />

                    <button onClick={() => { this.update() }}> UPDATE DETAILS </button>
                </div>
            </div>
        )
    }
}
