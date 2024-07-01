import React, {useEffect} from 'react';

const UseEffectAPI = () => {
  const gerUsers = async () =>{
      const response = await fetch('https://api.github.com/users');
      console.log(response);
      const data = await response.json();
      console.log(data);
  }

  useEffect(() =>{
    gerUsers();
  })


  return (
    <>
      <h1 className='text-center' style={{ backgroundColor: '#ffcccb', color: '#000', padding: '10px' }}>Let's fetch Git user from API</h1>
      <div className='container-fluid mt-5' style={{ backgroundColor: '#ffcccb' }}>
        <div className='row text-center'>
          <div className="col-10 col-md-4 mt-5">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <div className="image"> 
                  <img src="#" className="rounded" width="155" alt="Profile" /> 
                </div>
                <div className="ml-3 w-100">
                  <h4 className="mb-0 mt-0 text-left">Your Name</h4>
                  {/* <span className="text-left">{type}</span> */}
                  <div className="p-2 mt-2 d-flex justify-content-between rounded text-white stats">
                    <div className="d-flex flex-column">
                      <span className="articles">Articles</span> 
                      <span className="number1">38</span> 
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
          
          {/* Add more cards as needed */}
          
        </div>
      </div>
    </>
  );
}

export default UseEffectAPI;
