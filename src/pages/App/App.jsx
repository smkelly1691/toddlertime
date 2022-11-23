import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewPlanPage from '../NewPlanPage/NewPlanPage'
import PlanHistoryPage from '../PlanHistoryPage/PlanHistoryPage'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
      <>
        <NewPlanPage user={user} setUser={setUser} />
      </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


