import axios from 'axios';
import React from 'react';
var categories = [];   
axios.get('http://localhost:8095/api/category').then( response=> {{categories = response.data}});
const CategoryList = () => {
    return (
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped table-bordered first">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categories.map((categorie)=>
                        <tr>
                            <td>{categorie.name}</td>
                            <td>{categorie.description}</td>
                        </tr>
                    )
                    }                        
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default CategoryList;