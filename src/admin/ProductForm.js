import axios from 'axios';
import React from 'react';


class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.files[0] })
        console.log(event.target.files[0].name);
        console.log(event.target.files[0].in);
        console.log(event.target.files[0].description);
        console.log(event.target.files[0].type);
        console.log(event.target.files[0]);
    }
    submit = () => {
        console.log(this.state)
        axios.post('http://localhost:8095/api/products', this.state, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })//.then((response) => console.log("response", response.data)).catch((err) => console.log("err", err.data));
    }

    render() {
        return (
            <form onChange={this.handleChange}>
                <input type="file" name="file" />
                <a onClick={this.submit}>Submit</a>
            </form>
        );
        //     <section class="shop checkout section">
        //         <div class="container">
        //             <div class="row">
        //                 <div class="col-lg-8 col-12">
        //                     <div class="checkout-form">
        //                         <h2>Ajouter un produit :</h2>
        //                         <form class="form" onChange={this.handleChange}>
        //                             <div class="row">
        //                                 <div class="col-lg-4 col-md-4 col-12">
        //                                     <div class="form-group">
        //                                         <label>Titre :<span>*</span></label>
        //                                         <input type="text" name="name" placeholder="Titre du produit ...." required="required" />
        //                                     </div>
        //                                 </div>
        //                                 <div class="form-group">
        //                                     <label>Prix :<span>*</span></label>
        //                                     <input type="text" name="price" placeholder="Ex :103.05 MAD" required="required" />
        //                                 </div>
        //                                 <div class="col-lg-6 col-md-6 col-12">
        //                                     <div class="form-group">
        //                                         <label>description :<span>*</span></label>
        //                                         <input type="textarea" name="description" placeholder="" required="required" />
        //                                     </div>
        //                                 </div>
        //                                 <div class="col-lg-6 col-md-6 col-12">
        //                                     <div class="form-group">
        //                                         <label>Categorie :</label>
        //                                         <select name="country_name" id="country" hidden>
        //                                             {/* {this.state.AllCategories.map((category) =>
        //                                                 <option key={category.id} value={category}>{category.name}</option>
        //                                             )} */}
        //                                         </select>
        //                                     </div>
        //                                 </div>
        //                                 <div class="col-lg-6 col-md-6 col-12">
        //                                     <div class="form-group">
        //                                         <label>Photo :<span>*</span></label>
        //                                         <input type="file" name="image" style={{ background: '#ffffff', width: '100% ', height: ' 40px', lineHeight: '20px' }}
        //                                         />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div class="button">
        //                                 <a onClick={this.submit} >Enregistrer</a>
        //                             </div>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // )
    }
};

export default ProductForm;