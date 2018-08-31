import React from 'react';
import { Link } from 'react-router-dom';
import './categories.list.css';

const CategoriesList = ({ categories }) => {

    const emptyMessage = (
        <p>----------------</p>
    );
  
    const categoriesList = (
        <div>
        {
            categories.map((item) =>                
                    <div className="category-item" key = {item.id}>
                        <Link to={`/articles_page/${item.id}`}>{item.title}</Link> 
                        <br /><p> Description</p>
                    </div>)
        }
        </div>
    );

    return(
        <div>
            { categories.length === 0 ? emptyMessage : categoriesList }
        </div>
    );
}


export default CategoriesList;