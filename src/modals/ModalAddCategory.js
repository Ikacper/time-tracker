import React, { useState }from 'react';
import Modal from 'react-modal';
import styles from './ModalTemplate.module.css';

import { CloseIcon } from './../assets/svgs/ButtonIcons'

const ModalAddCategory = ({ modalIsOpen, setModalIsOpen, dispatch }) => {

    const [category, setCategory] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Category: " + category);
        // dispatch({ type: 'ADD_CATEGORY', item: {category }});
        // axios.post()
        // setCategory('');
    }
    return (
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className={styles.modal}
            overlayClassName={styles.overlayModal}
        >
            <div className={styles.modalTopBar}>
                <span className={styles.closeIcon}>
                    <CloseIcon />
                </span>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className={styles.input}
                    placeholder="Add Category"
                />
                <input type='submit' value='Create' />
            </form>
        </Modal>
    )
}

export default ModalAddCategory;