import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import styles from './ModalTemplate.module.css';

const ModalEditCategory = ({category, modalIsOpen, setModalIsOpen, dispatch}) => {

    const [state, setState] = useState({
        category: category.name,
        percents: category.allocationPercent
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state, 
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8080/api/v1/categories/'+category.id,
         {name: state.category, allocationPercent: state.percents},
         { withCredentials: true }
         ).catch(console.error);
    
        dispatch({ 
            type: 'UPDATE_CATEGORY',
            id: category.id,
            category: state.category,
            allocationPercent: state.percents
         })
    }

    return(
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className={styles.modal}
            overlayClassName={styles.overlayModal}
         >
             <form onSubmit={handleSubmit} className={styles.form}>
                 <input type='text' name='category' value={state.category} onChange={handleChange} />
                 <input type='text' name='percents' value={state.percents} onChange={handleChange} />
                 <input type='button' value='Cancel' />
                 <input type='submit' value='Save Changes' />
             </form>
         </Modal>
    )
}

export default ModalEditCategory;