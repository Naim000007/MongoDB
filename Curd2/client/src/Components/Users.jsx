import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([
    {
      Name: "Naim",
      Email: "mdnaim01303202218@gmail.com",
      Age: 23,
    },
  ]);
  return (
    <>
      <div className="d-flex vh-100 bg-success justify-content-center alingn-items-center">
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
              {users.map((user) => {
                return (
                  <tr>
                    <th scope="row"></th>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>{user.Age}</td>
                    <td>
                      <Link to='/update'><button>Edit</button></Link>
                      <button>Delete</button>
                      {/* <button>button</button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
/* 
<div className='d-flex vh-100 bg-primary justify-content-center alingn-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
          <tbody>
            {
              users.map(user =>{
               return  <tr>
               <td>{user.Name}</td>
               <td>{user.Email}</td>
               <td>{user.Age}</td>
               <td><button>Edit</button><button>Delete</button></td>
             </tr>
              })
            }
          </tbody>
        </div>
      </div>
*/
