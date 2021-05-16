import React from 'react';
import '../../App.css';

function Portfolio() {
    return (
        <div>
            <div class="row">
                <div class="col">
                    <div class="card mx-auto mb-3">
                        <img class="card-img-top" src="../images/grandma.jpg"></img>
                            <div class="card-body">
                                <h5 class="card-title">Project Name</h5>
                                <p class="card-text">
                                    Description of project
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Portfolio