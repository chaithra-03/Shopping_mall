//Program to demonstrate HTTP post request
import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';

class UpdateShop extends Component {
    
    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            dob:'',
            address:'',
            shop_id:'',
        }
    }

    //event function having event has an argument
    ChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    
    //on click of submit button submithandler function will be invoke
    submitHandler=(e)=>{
        console.log(this.state.id)
        axios.post('http://localhost:8081/shops',this.state)
        .then(response=>{
            console.log(response)
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const{ id,name,dob,address,shop_id}= this.state
        return (
            <div className="inputdetails">
                <form onSubmit={this.submitHandler} >
                    <div>
                        <h1>FILL IN THE DETAILS</h1>
                    </div>
                    <div >
                        <input type="text" name="id" value={id} placeholder="Id" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input  type="text" name="name" value={name} placeholder="Shopowner Name" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="dob" value={dob} placeholder="Shopowner DOB" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="address" value={address} placeholder="Shop Address" onChange={this.ChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="shop_id" value={shop_id} placeholder="Shop id" onChange={this.ChangeHandler}/>
                    </div>
                    
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}
export default UpdateShop;