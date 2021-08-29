import axios from 'axios';
import React , {useContext} from 'react';
const initialState = 0
const cart = [	{
    id : 1 ,
    name :"test",
    price : "123"
},
{
    id : 2 ,
    name :"test",
    price : "1238"
},
{
    id : 3,
    name :"test",
    price : "54sd"
}]; 
const HOST = 'http://localhost:8081';
class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{}],
            products: []
        };
    }
    chargeProduct(categorie) {
        var All = axios.get(HOST + '/api/product/category/' + categorie.id).then(response => {
            console.log(response.data)
            this.setState({ products: response.data })
            var a = document.getElementsByClassName("nav-link")
            var active = document.getElementsByClassName("nav-link active")
            for (var i = 0; i < a.length; i++) {
                a[i].addEventListener("click", function() {
                    for (var i = 0; i < active.length; i++) {
                        active[i].className = "nav-link";
                    }
                  this.className += " active";
                });
              }
        });
    }
    Allcategories = axios.get(HOST + '/api/category').then(response => {
        console.log(response.data)
        this.setState({ categories: response.data })
    });
    
    init(){
        this.chargeProduct(this.state.categories[0])
        var current = document.getElementsByClassName("active");
        current[0].className += " active";
    }

    render() {
        return (
            <>
                <div className="product-area section" >
                    <div className="container" >
                        <div className="row" >
                            <div className="col-12" >
                                <div className="section-title" >
                                    <h2 > Trending Item </h2> </div> </div> </div > <div className="row" >
                            <div className="col-12" >
                                <div className="product-info" > </div>
                                <div className="nav-main" >
                                    <ul className="nav nav-tabs" id="myTab" role="tablist" >
                                        {this.state.categories.map((categorie) => (
                                            <li className="nav-item" key={categorie.id} >
                                                <a className="nav-link" id ={"Categorie"+categorie.id}  data-toggle="tab" href="#man" role="tab" onClick={() => { this.chargeProduct(categorie) }} >
                                                    {categorie.name}
                                                </a>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>

                                <div className="tab-content"
                                    id="myTabContent" >
                                    <div className="tab-pane fade show active"
                                        id="man"
                                        role="tabpanel" >
                                        <div className="tab-single" >
                                            <div className="row" > {this.state.products.map((product) =>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={product.id}>
                                                    <div className="single-product" >
                                                        <div className="product-img" >
                                                            <a href="product-details.html" >
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a> <div className="button-head" ><div className="product-action" >
                                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="www.google.com" >
                                                                    <i className=" ti-eye" >
                                                                    </i>
                                                                    <span>Quick Shop</span >
                                                                </a>
                                                                <a title="Wishlist" href="www.google.com" >
                                                                    <i className=" ti-heart " > </i>
                                                                    <span>Add to Wishlist</span >
                                                                </a>
                                                                <a title="Compare" href="www.google.com" >
                                                                    <i className="ti-bar-chart-alt" > </i>
                                                                    <span>Add to Compare</span >
                                                                </a> </div >
                                                                <div className="product-action-2" >

                                                                    <a title="Add to cart" href="www.google.com" > Add to cart </a>

                                                                </div >
                                                            </div>
                                                        </div >
                                                        <div className="product-content" >
                                                            <div className="product-price" >
                                                                <h3 >
                                                                    <a href="product-details.html" >{product.name} </a>
                                                                </h3 >
                                                                <span > {product.price} MAD </span>
                                                            </div >
                                                        </div>
                                                    </div >
                                                </div>
                                            )}
                                            </div>
                                        </div >
                                    </div>
                                </div >
                            </div>
                        </div >
                    </div >
                </div >
            </>
        );
    }
}

export default Categories;