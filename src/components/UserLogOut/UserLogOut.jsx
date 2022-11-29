import { logOut } from '../../utilities/users-service';
import './UserLogOut.css'

export default function UserLogOut({ user, setUser }) {
    function handleLogOut() {
        logOut();
        setUser(null);
    }

    return (
        <div className="UserLogOut">
            <button className="btn-lg" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}