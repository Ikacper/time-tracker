import React, { useEffect , useReducer, useState } from 'react';
import axios from 'axios';

import ModalAddCategory from '../../modals/ModalAddCategory'
import ModalEditCategory from '../../modals/ModalEditCategory';

import { EditIcon, DeleteIcon, AddIcon } from './../../assets/svgs/ButtonIcons';
import styles from './Index.module.css';

function categoriesReducer(state, action) {
    switch (action.type) {
        case 'ADD_CATEGORY':
        return [...state, {
            name: action.item.category,
            }
          ];
        case 'DELETE_CATEGORY':
            return state.filter(category => category.id !== action.id);
        case 'UPDATE_CATEGORY':
             return state.map(category => (category.id === action.id) ? 
                 {...category, name: action.category} : 
                 category );
            case 'FETCH_SUCCESS':
                return action.payload;
            default:
                return state;
    }
}

const Categories = () => {  
        const[state, dispatch] = useReducer(categoriesReducer, []);
    
    const fetchData = async () => {      
         axios.get('http://localhost:8080/api/v1/categories', { withCredentials: true })
                .then(( {data}) => {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data });
                })       
     };
    useEffect(() => {
        fetchData()
        .catch(console.error);
     }, []);
    
    return( 
        <div className={styles.wrapper}>
            <div className={styles.pageHeader}>
                <h2 className={styles.pageTitle}>Categories</h2>
            </div>
            <div className={styles.categoryContainer}>
                <CategoryList 
                    state={state}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
}

const CategoryList = ({ state, dispatch }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <ul className={styles.categoryBoxes}>
            <li className={styles.item} onClick={() => setModalIsOpen(true)}>
                <button className={styles.addButton}>
                    <AddIcon />                   
                </button>
                <span className={styles.addCategoryText}>Add Category</span>
            </li>
            <ModalAddCategory
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                dispatch={dispatch}
            />
            {state.map(category => 
                    (
                    <CategoryItem 
                        dispatch={dispatch}
                        category={category}
                        key={category.id}  >
                    </CategoryItem> 
                    )
            )}
        </ul>
    )
}

const CategoryItem = ({ dispatch, category }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleClick= () => {  
        axios.delete('http://localhost:8080/api/v1/categories/'+category.id, { withCredentials: true })
        .then(response => {
            if(response.data != null) {
                alert("Category removed!");
            }
        })   
        dispatch({type: 'DELETE_CATEGORY', id: category.id});
    }

     return(
         <>
            <li className={styles.item}>
                    {category.name}
                    <p className={styles.categoryActions}>7 actions</p>
                <div className={styles.itemOptions}>
                    <button className={`${styles.button} ${styles.edit}`} onClick={() => setModalIsOpen(true)}>
                        <EditIcon /> 
                    </button>
                    <button className={`${styles.button} ${styles.delete}`} onClick={handleClick}>
                        <DeleteIcon /> 
                    </button>
                </div>
                
            </li>
            <ModalEditCategory 
                category={category}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                dispatch={dispatch}
            />
         </>
     )
}


// TO DO:
//
// CREATE MODAL FOR ADDING CATEGORY
//
// const CategoryForm = ({ dispatch }) => {

//     const [category, setCategory] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         dispatch({ type: 'ADD_CATEGORY', item: {category }});

//         axios.post()
//         setCategory('');
//     }

//     return (
//         <li className={styles.item}>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type='text'
//                     value={category} 
//                     onChange={(e) => setCategory(e.target.value)} 
//                 />
//                 <input type='submit' value='Add category' />
//             </form>
//         </li>
//     )
// }

export default Categories;