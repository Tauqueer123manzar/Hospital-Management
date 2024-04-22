import React from 'react'
const Login = () => {
  return (
    <Container-fluid>
      <h1 className='text-center'style={{marginTop:"65px"}}>Sign In</h1>
      <p className='text-center'>Please Login to continue</p>
      <p className='text-center'>Hospital Management software automates processes including billing, appointments,<br></br>
       scheduling, regulatory compliance and financial auditing within hospitals.</p>
       <form className='container'>
       <div className='row justify-content-center'>
        <div className='col-lg-4 col-md-6 col-sm-3'>
        <input className="form-control p-2"
        type='email'
        placeholder='Email'>
        </input>
        </div>
        </div>

      <div className='row justify-content-center'>
      <div className='col-lg-4 col-md-6 col-sm-3'>
      <input className='form-control p-2 mt-4'
       type="password"
       placeholder="Password">
      </input>
      </div>
      </div>

      <div className='row justify-content-center'>
      <div className='col-lg-4 col-md-6 col-sm-3'>
      <input className='form-control p-2 mt-4'
       type="password"
       placeholder='Confirm Password'>
      </input>
      </div>
      </div>
        
      <div className='text-center mt-2 fw-medium'> {/* Added className */}
        <p>Not Registered? Register Now</p> {/* Changed the structure of the link */}
      </div>

      <div className='text-center'>
          <button className='btn btn-primary mt-4' style={{width:"95px"}}>Login</button>
      </div>
    </form>
    </Container-fluid>
  )
}

export default Login
