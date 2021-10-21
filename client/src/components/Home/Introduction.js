import React from 'react';

function Introduction ({ closeModal }) {
    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={() => closeModal(false)}></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <div className=" is-flex is-flex-direction-row has-text-centered">
                        <button className="column is-1">
                            
                        </button>
                        <div className="column has-text-center">
                            <h1 className="modal-card-title">Cognitive Behavioral Therapy (CBT)</h1>
                            <h2>So many people have been where you are at in this difficult journey.
                            Seeking for help and looking for a solution to what they deem is wrong with themself.</h2>
                        </div>
                        <button className="column is-1">
                            
                        </button>
                    </div>
                    <div className="has-text-centered">
                        . . .
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default Introduction;