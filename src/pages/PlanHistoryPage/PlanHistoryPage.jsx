import { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import './PlanHistoryPage.css';
import * as activityPlansAPI from '../../utilities/activityPlans-api';
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import ActivityPlanList from '../../components/ActivityPlanList/ActivityPlanList';
import UserDetail from '../../components/UserDetail/UserDetail';
import { Link } from 'react-router-dom';

export default function PlanHistoryPage({ user, setUser }) {
    const [activityPlans, setActivityPlans] = useState([]);

    useEffect(function() {
        async function getActivityPlans() {
            const activityPlans = await activityPlansAPI.getActivityPlanHistory();
            setActivityPlans(activityPlans);
        }
        getActivityPlans();
    }, []);


    return (
        <main className="PlanHistoryPage">
            <Row className="header">
                <Col span={5}>
                    <div><UserDetail user={user} /></div>
                </Col>
                <Col span={14}>
                    <div><Logo /></div>
                </Col>
                <Col span={5}>
                    <div><UserLogOut user={user} setUser={setUser} /></div>
                </Col>
            </Row>
            <Row className="body">
                <Col span={24}>
                    <div className="body-header">
                        <Link to='activityPlans/new'>BACK</Link>
                        <br></br>
                    </div>
                    <h2>ACTIVITY PLAN HISTORY</h2>
                    <div className="plans-list">
                    <ActivityPlanList 
                        activityPlans={activityPlans}
                    />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <footer>
                        <span>Toddler Time</span>
                        <span>© 2022 | Powered by React | All Rights Reserved</span>
                    </footer>
                </Col>
            </Row>
        </main>
    )
}