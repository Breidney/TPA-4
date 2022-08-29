import React from 'react';

function Skillpage() {
    return (
        <div className="container">
            <div className='skill'>
                <div className='aturskill'>
                    <div className=''>
                        <h1>My Skill</h1>

                        <div class="column right">
                            <div class="bars">
                                <div class="info">
                                    <span>HTML</span>
                                    <span>80%</span>
                                </div>
                                <div class="line html"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>CSS</span>
                                    <span>70%</span>
                                </div>
                                <div class="line css"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>JavaScript</span>
                                    <span>60%</span>
                                </div>
                                <div class="line js"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>React Js</span>
                                    <span>60%</span>
                                </div>
                                <div class="line react"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skillpage;