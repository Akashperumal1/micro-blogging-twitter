import React from 'react'
import '../assets/sign.css'
const Signin = () => {
  return (
    <div className='heading'>
         <div className='main'>
         <a href=''>
    <img src='src/assets/image/twitter-logo.png' alt='image' className='imgval' />
    </a>
    <h1>Sign in</h1>
<div className='input-name'> <i>👤</i><input type='text' placeholder='Name' name='name'/></div>
 <div className='input-name'><i>🔑</i><input type='password' placeholder='Password' name='phone'/></div>
 <div className="input-name"><button>
  Sign in
  </button></div>
  <div className="another-way">
    <div className='remember'>
    <input type="checkbox" /><span>Remember me</span>
    </div>
    <div className="forgot">
      <a href='#'> Forgot password ?</a>
    </div>
  </div>
  <h2>or</h2>
  <div className="online">
    <button className='google'><img src="src\assets\image\google-logo.png" alt="google" />
 Continue with Google</button>
    <button className='facebook'><img src="src\assets\image\Facebook-logo.png" alt="facebook" /> Facebook</button>
  </div>
</div>
    </div>
  )
}

export default Signin