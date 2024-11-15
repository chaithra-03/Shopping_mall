import React from 'react';  
    
import axios from 'axios';  
    
class DeleteShop extends React.Component {  
  state = {  
    posts: []  
  }  
    
  componentDidMount() {  
    axios.get(`http://localhost:8081/shops`)  
      .then(res => {  
        const posts = res.data;  
        this.setState({ posts });  
      })  
  }  
    
  deleteRow(id, e){  
    axios.delete(`http://localhost:8081/shops/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  
    
  render() {  
    return (  
      <div>  
        <h1> Delete Request </h1>  
    
        <table className="table table-bordered">  
            <thead>  
              <tr>  
                  <th>ID</th>  
                  <th>Name</th>  
                  <th>DOB</th> 
                  <th>Address</th> 
                  <th>Shop id</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((post) => (  
                <tr>  
                  <td>{post.id}</td>  
                  <td>{post.name}</td>  
                  <td>{post.dob}</td> 
                  <td>{post.address}</td>
                  <td>{post.shop_id}</td>    
                  <td>  
                    <button className="btn-btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table>  
      </div>  
    )  
  }  
}  
export default DeleteShop;