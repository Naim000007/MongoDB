import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000')
    .then(res => setUsers(res.data))
    .catch(err => console.error('Error fetching users:', err));
  },[])
  return (
    <>
      <div className="d-flex vh-auto bg-success justify-content-center alingn-items-center">
        <div className="w-50 bg-white rounded p-3">
          <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start">
              <Link to="/create" className="btn btn-outline-success me-2" type="button">
               Create User
              </Link>
              <button className="btn btn-sm btn-outline-secondary" type="button">
                Smaller button
              </button>
            </form>
          </nav>
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Edit</th>
                
              </tr>
            </thead>
            <tbody>
              {
                users.map(user =>(<tr>
                  <th scope="row"></th>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.age}</td>
                   <td>
                    <Link to='/update' ><button className="btn btn-success">Update</button></Link>
                    <button className="btn btn-denger">Delete</button>
                   </td>
                </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
    // <>
    // {
    //   users.map(i => <h1>{i.name}</h1> )
    // }
    // </>
  );
};

export default Users;
// {users.map(user => {
                
  //              (
  //               <tr>
  //                 {/* console.log(user.name) */}
  //                 <th scope="row"></th>
  //                 <td>{user.name}</td>
  //                 <td>{user.email}</td>
  //                 <td>{user.age}</td>
  //                 <h1>{user.name}</h1>
  //                 <td>
  //                   <Link to='/update' className="btn btn-success"><button>Update</button></Link>
  //                   <button className="btn btn-denger">Delete</button>
  //                   {/* <button>button</button> */}
  //                 </td>
  //               </tr>
  //             );
  //           })}