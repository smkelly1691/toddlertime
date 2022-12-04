import { useState, useEffect, useRef } from "react";
import './NewPlanPage.css'
import { Button } from 'antd';
import { Col, Row } from 'antd';
import * as activitiesAPI from '../../utilities/activities-api';
import * as activityPlansAPI from '../../utilities/activityPlans-api';
import UserDetail from "../../components/UserDetail/UserDetail";
import Logo from "../../components/Logo/Logo";
import ActivityPlanDetail from "../../components/ActivityPlanDetail/ActivityPlanDetail";
import CategoryList from "../../components/CategoryList/CategoryList";
import ActivityList from "../../components/ActivityList/ActivityList";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import { Link, useNavigate } from "react-router-dom";

export default function NewPlanPage({ user, setUser }) {
    const [planItems, setPlanItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [myplan, setMyplan] = useState(null);
    const categoriesRef = useRef([]);
    const navigate = useNavigate();

    useEffect(function() {
        async function getActivities() {
            const activities = await activitiesAPI.getAll();
            categoriesRef.current = [...new Set(activities.map(activity => activity.category.name))];
            setPlanItems(activities);
            setActiveCat(categoriesRef.current[0])
        };
        getActivities();

        async function getMyplan() {
            const myplan = await activityPlansAPI.getMyplan();
            setMyplan(myplan);
        };
        getMyplan();
    }, [])

    //Event Handlers
    async function handleAddToPlan(activityId) {
        const updatedPlan = await activityPlansAPI.addActivityToPlan(activityId)
        setMyplan(updatedPlan)
    }

    async function handleMarkCompleted() {
        const updatedPlan = await activityPlansAPI.markComplete();
        setMyplan(updatedPlan)
        navigate('/activityPlans/new');
    }

    async function handleDeleteActivity(activityId) {
        const updatedPlan = await activityPlansAPI.deleteActivityFromPlan(activityId)
        setMyplan(updatedPlan)
        navigate('/activityPlans/new')
    }

    return (
        <main className="NewPlanPage">
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
                <Col span={5}>
                    <aside>
                        <div><CategoryList 
                            categories={categoriesRef.current}
                            activeCat={activeCat}
                            setActiveCat={setActiveCat}
                        />
                        </div>
                        <div className="my-plan-link">
                            <Button type="link" block="true">
                                <Link to="/activityPlans">MY PLANS</Link>
                            </Button>
                        </div>
                    </aside>
                </Col>
                <Col span={12}>
                    <div className="activity-list">
                        <h2>{activeCat} Activities</h2>
                        <ActivityList
                            planItems={planItems.filter(activity => activity.category.name === activeCat)}
                            handleAddToPlan={handleAddToPlan} 
                            handleDeleteActivity={handleDeleteActivity}
                        />
                    </div>
                </Col>
                <Col span={7}>
                    <ActivityPlanDetail 
                        activityPlan={myplan} 
                        handleMarkCompleted={handleMarkCompleted} 
                        handleDeleteActivity={handleDeleteActivity}
                    />
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
    );
}