import React from "react";
import './App.css'


class App extends React.Component{
  state ={
    person:{
        FullName :"Kods Znaidi",
        imgSrcrc :"https://lh3.googleusercontent.com/a/ACg8ocJaWQBjRMZY1pnhBL-Y98S9m6rnpkQDGbPkkN2vRzHbc1Q=s360-c-no",
        profession :"FullStack Developer" ,
  },
    show:true,
}
handel=()=>{
  this.setState({show:!this.state.show})
}  


  render(){
    const myInterval = setInterval(myTimer, 1000);

  function myTimer() {
      const d= new Date();
      const element =document.getElementById("demo"); 
      element.innerHTML = d.toLocaleTimeString();
    }
    
    function myStopFunction() {
      clearInterval(myInterval);
    }
    
  return(
      <div>
        <button className="haga" onClick={() => {this.handel();myStopFunction() }}>Click Me</button>
        {this.state.show?
      <div>
          <a href="http://www.thedresscounter.com/" target="_blank">
          <section>
          <div class="container">
          <div class="background-img">
            <div class="box">
            <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="content">
          <h2>{this.state.person.FullName} </h2>
          <h3>{this.state.person.profession}</h3>
          <p><img style={{width:'70%',borderRadius:'20px'}} src={this.state.person.imgSrcrc} alt="image"/></p>
          <p id="demo"></p>
        </div>
        
      </div>
    </div>
  </div>
          </section></a>
      </div>:<p></p>}
      </div>
    )
  }
}



export default App;
