import React from 'react'
import './SignUp.scss'

const SignUp = () => {
  return (
    <div className='sign-up-container'>
        <div className='left-sign-up-form'>
            <h2 className='title'>Sign Up</h2>
            <form className='sign-up-form'>
                <div className='form-control'>
                    <input type="text" placeholder="First" />
                    <input type="text" placeholder="Last" />
                </div>
                <div className='form-control'>
                    <input type="email" placeholder="Email" />
                </div>
                <div className='form-control'>
                    <input type="password" placeholder="Password" />
                </div>
                <div className='form-control'>
                    <input type="password" placeholder="Confirmation" />
                </div>
                <button className='sign-up-btn' type="submit">Sign Up</button>
            </form>
        </div>
        <div className='right-sign-up-introduce'>
            <h2 className='title'>Chào Mừng Bạn Đến Với HealthCare</h2>
            <img className='introduce-img' src="path/to/your/image.png" alt="HealthCare" />
            <p className='end'>Vui Lòng Đăng Ký Để Tiếp Tục</p>
        </div>
    </div>
  )
}

export default SignUp