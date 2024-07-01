import React from 'react';
import { FaGithub } from "react-icons/fa6";

function Users({ users }) {  // Correctly destructure the users prop
  return (
    <>
      <h1 className='text-center' style={{ backgroundColor: '#d390ff', color: '#000', padding: '10px' }}>Let's fetch Git users from API</h1>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img src={curElem.avatar_url} className="rounded" width="155" alt="Profile" />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 text-left">{curElem.login } <FaGithub /> </h4>
                      <div className="p-2 mt-2 bg-light-blue d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span>
                          <span className="number1">{curElem.node_id}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">980</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number3">8.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Users;
