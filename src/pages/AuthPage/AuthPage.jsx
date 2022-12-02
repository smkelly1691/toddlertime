import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {


    return (
    <main className="authpage">
            <header>
                <div><h2>Welcome to Toddler Time</h2></div>
                <div><p><em>Everyday is an Adventure</em></p></div>
            </header>
            <div className="body">
                <div><LoginForm setUser={setUser} /></div>
                <div><SignUpForm setUser={setUser} /></div>
            </div>
            <footer>
                <span>Toddler Time</span>
                <span>© 2022 | Powered by React | All Rights Reserved</span>
            </footer>
    </main>
    )
}