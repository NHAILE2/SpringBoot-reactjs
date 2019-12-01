import React, { Component } from 'react'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {Form,Container,FormGroup,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Catagory from './Catagory';
export default class Expenses extends Component {
    state={
        date:new Date,
        isLoading:true,
        expenses:[],
        Catagories:[]
    }
    async componentDidMount(){
        const response= await fetch('/api/catagories');
        const body=await response.json();
        console.log(body);
        
        
        this.setState({
            Catagories:body,
            isLoading:false
        })
    }


    handleChange=()=>{

    }
    render() {
        const title=<h3>Add Expense</h3>;
        const {Catagories, isLoading}=this.state;
        if(isLoading){
            return <div>Loading...</div>
        }
        let optionList= Catagories.map(catagory=>
            <option id={catagory.id}>{catagory.name}</option>
        )
        return (
            <div>
                
                <Container>
                    {title}
                    <Form>
                        <FormGroup>
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title" onChange={this.handleChange} autoComplete="name" />
                        </FormGroup>
                        
                        


                        <FormGroup>
                            <label for="catagory">Category</label>
                           <select>
                           {optionList}
                        </select>
                           
                            {/* <input type="text" name="catagory" id="catagory" onChange={this.handleChange} /> */}
                        </FormGroup>
                        <FormGroup>
                            <label for="expenseDate">ExpenseDate</label>
                            <Datepicker selected={this.state.date}  onChange={this.handleChange}  />
                        </FormGroup>
                        
                        <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                        <label for="location">Location</label>
                           <input type="text" name="location" id="location" onChange={this.handleChange} />
                        </FormGroup>
</div>

                            
                        <FormGroup>
                            <Button type="submit" color="primary">Save</Button>{`  `}                         
                            <Button type="submit" color="secondary" tag={Link} to="/catagory">Cancel</Button>                         

                        </FormGroup>
                        

                    </Form>
                </Container>
            </div>
        )
    }
}
