import React from 'react';

const Dashboard = ({hit, addBall, addFoul, addStrike}) => {
    return (
        <div data-testid='dashboard-id' className='dashboard-wrapper'>
            <button onClick={hit}>Hit</button>
            <button onClick={addBall}>Ball</button>
            <button onClick={addFoul}>Foul</button>
            <button onClick={addStrike}>Strike</button>
        </div>
    );
};

export default Dashboard;