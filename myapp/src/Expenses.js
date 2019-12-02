import React, { Component } from 'react'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {Form,Container,FormGroup,Button,Table} from 'reactstrap'
import {Link} from 'react-router-dom'
import Catagory from './Catagory';
export default class Expenses extends Component {
    // {
    //     "id": 100,
    //     "expensedate": "2019-06",
    //     "descript": "NY",
    //     "location": "New York",
    //     "catagory": {
    //         "id": 10,
    //         "name": "Travel"
    //     }
    // }

    emptyItem={
        id:103,
        expensedate:new Date(),
        descript:'Dinner',
        location:'',
        catagory:[1,'Travel']
    }

    constructor(props){
        super(props);
        this.state={
            date:new Date,
        isLoading:true,
        Expenses:[],
        Catagories:[],
        item:this.emptyItem
        }

    }

    async componentDidMount(){
        const response= await fetch('/api/catagories');
        const body=await response.json();
        console.log(body);
        this.setState({
            Catagories:body,
            isLoading:false
        });

        const responseExp= await fetch('/api/expenses');
        const bodyExp=await responseExp.json();
        console.log(bodyExp);
        
        this.setState({
            Expenses:bodyExp,
            isLoading:false
        });
        
   }

    


    handleChange=()=>{

    }
    render() {
        const title=<h3>Add Expense</h3>;
        const {Catagories}=this.state;
        const {Expenses,isLoading}=this.state;
        if(isLoading){
            return <div>Loading...</div>
        }
        let optionList= Catagories.map(catagory=>
            <option id={catagory.id}>{catagory.name}</option>
        )
        let rows=Expenses.map(expense=>
            <tr>
                <td>{expense.descript}</td>
                <td>{expense.location}</td>
                <td>{expense.expensedate}</td>
                <td>{expense.catagory.name}</td>
                <td><Button size="sm" color="dangar" onClick={()=>this.remove(expense.id)}/></td>
            </tr>
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

                {` `}
                <Container>
                    <h3>Exepense List</h3>
                    <Table className="mt-4">
                    <thead>
                        <tr>
                            <th width="20%">Description</th>
                            <th width="10%">Location</th>
                            <th >Catagory</th>
                            <th width="10%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}

                    </tbody>

                    </Table>


                </Container>

            </div>
        )
    }
}
