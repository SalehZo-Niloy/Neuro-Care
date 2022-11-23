import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, deleteModal, successMessage }) => {
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="confirmationModal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-white">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={closeModal} htmlFor="confirmationModal" className="btn btn-sm btn-outline btn-primary">Cancel</label>
                        <label onClick={deleteModal} htmlFor="confirmationModal" className="btn btn-sm btn-primary">{successMessage}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;