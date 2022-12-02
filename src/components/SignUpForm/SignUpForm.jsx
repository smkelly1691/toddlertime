// Rewrite the SignUpForm as a function component
import { useState } from 'react'
import { signUp } from '../../utilities/users-service'

export default function SignUpForm({ setUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const disable = formData.password !== formData.confirm;

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const formDataCopy = {...formData}
            delete formDataCopy.error
            delete formDataCopy.confirm
            const user = await signUp(formDataCopy)
            setUser(user)
        } catch {
            setFormData({
                ...formData,
                error: 'Sign Up Failed - Try Again'
            })
        }
    }

    return(
        <div>
            <form className="signupform" autoComplete="off" onSubmit={handleSubmit} name="signupform">
                <h2>Sign Up</h2>
                <ul className="noBullet">
                    <li>
                        <label>Name</label>
                        <input className="inputFields" type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </li>
                    <li>
                        <label>Email</label>
                        <input className="inputFields" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </li>
                    <li>
                    <label>Password</label>
                    <input className="inputFields" type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </li>
                    <li>
                        <label>Confirm</label>
                        <input className="inputFields" type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                    </li>
                    <li className="center-btn">
                    <button className="join-btn" type="submit" disabled={disable}>SIGN UP</button>
                    </li>
                </ul>
            </form>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
    )
}