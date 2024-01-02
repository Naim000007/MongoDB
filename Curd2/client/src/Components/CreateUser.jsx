import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function CreateUser() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [age , setAge] = useState('')
  const HandelSubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/creatUser', {name, email , age})
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }
  return (
    <>
      <div className="d-flex vh-100 bg-success justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <nav className="navbar bg-body-tertiary mb-3">
            <form className="container-fluid justify-content-start">
              <Link to="/" className="btn btn-outline-success me-2" type="button">
                All user
              </Link>
              <button className="btn btn-sm btn-outline-secondary" type="button">
                Smaller button
              </button>
            </form >
          </nav>

          <form onSubmit={HandelSubmit} >
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e)=>{setAge(e.target.value)}}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
