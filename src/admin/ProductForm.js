import axios from 'axios';
import React from 'react';


class ProductForm extends React.Component {
    constructor() {
        super();
        this.state = {
            "bestSelling": true,
            "category": {
                "description": "string",
                "id": 8,
                "name": "string"
            },
            "id": 0,
            "name": "string",
            "newArrival": true,
            "price": 0
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log()
        console.log(this.state)
    }
    submit = () => {
        const data = this.state ;
        console.log(data)
        axios.post('http://localhost:8095/api/products/newProduct', data);
    }


    render() {
        return (
            <div class="card container col-6">
                <h5 class="card-header">Basic Form</h5>
                <div class="card-body">
                    <form onSubmit={this.submit} onChange={this.handleChange} >
                        <div class="form-group">
                            <label for="inputText4" class="col-form-label">Titre</label>
                            <input id="inputPassword" type="text" name="name" placeholder="Titre produit" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword">Prix :</label>
                            <input id="inputPassword" type="text" name="price" placeholder="Prix(MAD)" class="form-control" />
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="input-select">Example Select</label>
                                <select class="form-control" id="input-select" >
                                    {/* {this.state.AllCategories.map((category) =>
                                        <option key={category.id} value={category}>{category.name}</option>
                                    )} */}
                                </select>
                            </div>
                        </div>
                        <div class="custom-file mb-3">
                            <input type="file" class="custom-file-input" name="name" id="customFile" />
                        </div>
                        <button type="submit">Enregistrer</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default ProductForm;