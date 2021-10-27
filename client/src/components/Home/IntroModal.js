import React, { useState } from 'react';
import PageOne from '../Introduction/PageOne';
import PageTwo from '../Introduction/PageTwo';

function IntroModal ({ closeModal }) {
    const [currentPage, setPage] = useState(false);

    const getPage = () => {
        if(currentPage <= 0) {
            setPage(2);
        } else if(currentPage >= 3) {
            setPage(1);
        }

        if(currentPage === 1) {
            return <PageOne />;
        } else {
            return <PageTwo />;
        }
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={() => closeModal(false)}></div>
            <div className="modal-card">
                <section className="modal-card-body">
                    <div className=" is-flex is-flex-direction-row has-text-centered">
                        <div className="column is-1" onClick={() => setPage(currentPage-1)}> ( </div>
                        
                        {getPage()}

                        <div className="column is-1" onClick={() => setPage(currentPage+1)}> ) </div>
                    </div>
                    <div className="has-text-centered">
                        . . .
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default IntroModal;