import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>Welcome to Toddler Time</h1>
            <h2>Create a New User Account</h2>
            <SignUpForm setUser={setUser} />
            <h2>Login </h2>
            <LoginForm setUser={setUser} />
        </main>
    )
}