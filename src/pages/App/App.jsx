import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewPlanPage from '../NewPlanPage/NewPlanPage';
import PlanHistoryPage from '../PlanHistoryPage/PlanHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {/* <div className="app-container"> */}
      { user ? 
      <>
        <Routes>
          <Route path="/activityPlans/new" element={<NewPlanPage user={user} setUser={setUser} />} />
          <Route path="/activityPlans" element={<PlanHistoryPage user={user} setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/activityPlans/new" />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser} />
      }
      {/* </div> */}
    </main>
  );
}


