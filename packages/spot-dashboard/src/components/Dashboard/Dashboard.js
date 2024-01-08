import React from 'react';

const Dashboard = () => {
    return (
        <div class="container-fluid">
            <div style={{ height: '150px' }}>
                <div style={{ backgroundColor: '#f1f1f1', height: '100%' }}>
                    <h2>Spot-Logo</h2>
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active">
                            <a href="#section1">Dashboard</a>
                        </li>
                        <li>
                            <a href="#section2">Age</a>
                        </li>
                        <li>
                            <a href="#section3">Gender</a>
                        </li>
                    </ul>
                </div>
                <br />

                <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div class="col-sm-3">
                            <div class="well">
                                <h4>Users</h4>
                                <p>1 Million</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="well">
                                <h4>Pages</h4>
                                <p>100 Million</p>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="well">
                                <h4>Sessions</h4>
                                <p>10 Million</p>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p>
                                <p>Text</p>
                                <p>Text</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="well">
                                <p>Text</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="well">
                                <p>Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
