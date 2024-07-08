import React from 'react';
import { FaGithub } from "react-icons/fa6";

function Users({ users }) {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#fff0db', minHeight: '100vh', padding: '20px' }}>
      <h1 className='text-center mb-4 py-2' style={{ backgroundColor: '#9f6454', color: '#fff', fontWeight: 'bold' }}>Github users fetch from API</h1>
      <div className='row g-1  '> {/* Changed from g-3 to g-2 */}
        {users.map((curElem) => (
          <div className="col-md-4 mb-0" key={curElem.id}> {/* Added mb-2 for smaller vertical gap */}
            <div className="card border-0 shadow-sm"> {/* Removed h-100 to allow cards to shrink */}
              <div className="card-body py-2"> {/* Reduced vertical padding */}
                <div className="d-flex align-items-center mb-2"> {/* Reduced bottom margin */}
                  <div className="flex-shrink-0">
                    <img src={curElem.avatar_url} className="rounded-circle" width="50" height="50" alt="Profile" />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="card-title mb-0">{curElem.login}</h5>
                    <p className="card-text text-muted small mb-0">User</p>
                  </div>
                  <div className="flex-shrink-0">
                    <FaGithub size={24} />
                  </div>
                </div>
                <div className="d-flex justify-content-between" style={{ backgroundColor: '#EFD9BB', padding: '8px', borderRadius: '5px' }}> {/* Reduced padding */}
                  <div className="text-center">
                    <p className="mb-0 small">Articles</p>
                    <p className="mb-0 fw-bold">38</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-0 small">Followers</p>
                    <p className="mb-0 fw-bold">980</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-0 small">Rating</p>
                    <p className="mb-0 fw-bold">8.9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users;