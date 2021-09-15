import axios from 'axios';
import React from 'react';

class CategoryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            id : 0
        };
    }
    submit = () => {
         axios.post('http://localhost:8095/api/category/addCategory',this.state)
    }
    change = (event) => {
        this.setState({[event.target.name] : event.target.value});
        console.log(this.state)
    }
    render() {
        return (
            <div class="card-body container center ">
                <form onChange={this.change} onSubmit={this.submit}>
                    <div class="form-group">
                        <label for="inputText3" class="col-form-label">Titre :</label>
                        <input id="inputText3" name="name" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description :</label>
                        <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        )
    }
};

export default CategoryForm;