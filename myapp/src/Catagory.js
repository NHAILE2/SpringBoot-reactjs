import React, { Component } from 'react'

 class Catagory extends Component {
    state={
    isLoading:true,
    Catagories:[]    
    }
    async componentDidMount(){
        const response= await fetch('/api/catagories')
        const body=await response.json();
        console.log(body);
        this.setState({
            Catagories:body,
            isLoading:false
        })
        
    }
    render() {
        const {Catagories,isLoading}=this.state;
        if(isLoading){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>Catagories</h2>
                {Catagories.map(res=>(
              
             <div key={res.id}>{res.name}</div>
                ))}
            </div>
        )
    }
}
export default  Catagory