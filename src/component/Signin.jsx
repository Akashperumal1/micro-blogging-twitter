import React from 'react'
import styles from '../assets/sign.module.css'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
<div className={styles.heading}>
         <div className={styles.main}>
         <Link to={"/"} >
    <img src='src/assets/image/twitter-logo.png' alt='image' className={styles.imgval} />
    </Link>
    <h1>Sign in</h1>
<div className={styles.inputNa}> <i>👤</i><input type='text' placeholder='Name' name='name' className={styles.inputans}/></div>
 <div className={styles.inputNa}><i>🔑</i><input type='password' placeholder='Password' name='phone' className={styles.inputans}/></div>
 <div className={styles.inputNa}>
  <Link to={'/blog'}>
  <button>
  Sign in
  </button>
  </Link>
  </div>
  <div className={styles.another}>
    <div className={styles.remember}>
    <input type="checkbox"className={styles.inputcheck} /><span className={styles.spanSi}>Remember me</span>
    </div>
    <div className={styles.forgot}>
      <Link to={'/'}> Forgot password ?</Link>
    </div>
  </div>
  <h2>or</h2>
  <div className={styles.online}>
    <button className={styles.google}><img src="src\assets\image\google-logo.png" alt="google" />
 Continue with Google</button>
    <button className={styles.facebook}><img src="src\assets\image\Facebook-logo.png" alt="facebook" /><p > Facebook</p></button>
  </div>
</div>

    </div>

    
  )
}

export default Signin