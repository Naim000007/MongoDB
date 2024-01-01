import React from 'react'
import { Link } from 'react-router-dom'

const UpdateUser = () => {
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
            </form>
          </nav>

          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
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
              />
             
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateUser