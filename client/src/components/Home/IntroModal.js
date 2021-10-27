import React, { useState } from 'react';
import PageOne from '../Introduction/PageOne';
import PageTwo from '../Introduction/PageTwo';
import PageThree from '../Introduction/PageThree';
import PageFour from '../Introduction/PageFour';

function IntroModal ({ closeModal }) {
    const [currentPage, setPage] = useState(false);

    const getPage = () => {
        if(currentPage <= 0) {
            setPage(4);
        } else if(currentPage >= 5) {
            setPage(1);
        }

        if(currentPage === 1) {
            return <PageOne />;
        } else if(currentPage === 2) {
            return <PageTwo />;
        } else if(currentPage === 3) {
            return <PageThree />;
        } else if(currentPage === 4) {
            return <PageFour />;
        }
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={() => closeModal(false)}></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <div className=" is-flex is-flex-direction-row has-text-centered">
                        <div className="column is-1 is-flex is-align-items-center" onClick={() => setPage(currentPage-1)}><i className="fas fa-chevron-left"></i></div>
                        
                        {getPage()}

                        <div className="column is-1 is-flex is-align-items-center" onClick={() => setPage(currentPage+1)}><i className="fas fa-chevron-right"></i></div>
                    </div>
                    <div className="has-text-centered">
                        {currentPage===1 ? (<i className="fas fa-circle p-1" onClick={() => setPage(1)}></i>) : (<i className="far fa-circle p-1" onClick={() => setPage(1)}></i>)}
                        {currentPage===2 ? (<i className="fas fa-circle p-1" onClick={() => setPage(2)}></i>) : (<i className="far fa-circle p-1" onClick={() => setPage(2)}></i>)}
                        {currentPage===3 ? (<i className="fas fa-circle p-1" onClick={() => setPage(3)}></i>) : (<i className="far fa-circle p-1" onClick={() => setPage(3)}></i>)}
                        {currentPage===4 ? (<i className="fas fa-circle p-1" onClick={() => setPage(4)}></i>) : (<i className="far fa-circle p-1" onClick={() => setPage(4)}></i>)}
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default IntroModal;