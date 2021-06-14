import React, { Component } from 'react'
import './NavBar.css'
export default class navBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: {},toggle:false};
        // this.values contains the contents of the navbar. it contains title and nav items. Nav items can be of drop down menu
        //   this.values = {
        //     brandName:"Pustak Pasal",
        //     navItems :{
        //       nav1:{name:"Home",goto:"/"},
        //       nav6:{name:"TEST",links:{
        //         subLink1:{name:"test",goto:"/test"},
        //         subLink2:{name:"tests",goto:"/tests"},
        //       }},
        //     }
        // }}
                this.values = {
          brandName:" Project",
          navItems :[
            {name:"Home",goto:"/",type:"link"},
            {name:"Buy",type:"dropDown",links:[
              {name:"Books",goto:"/books"},
              {name:"Other Items",goto:"/stationeryItems"},
            ]},
            {name:"Buy Books",goto:"/books",type:"button"},

          ]
      }
    }
    render() {
        return (
            <div className="navigation">
              <div className="nav-container">
                  <div className="brand">
                  <a href="/">{this.values.brandName}</a>
                  </div>
                  <nav>
                  <div className="nav-mobile"><a id="nav-toggle" className={`${this.state.toggle?"active":""}`} onClick={()=>{this.setState({toggle:!this.state.toggle})} } href="#!"><span></span></a></div>
                  <ul className={`nav-list `} style={ this.state.toggle ? { display:'block'} : {display:'none'}}  >
                    {
                      this.values.navItems.map((nav)=>{
                        console.log(nav.links)
                        if(nav.links){
                          return <li key={nav}>
                                    <a href="#1" onClick={() => { 
                                      this.setState({open:{[nav]:(this.state.open[nav])?!this.state.open[nav]:true}})}}>{nav.name} 
                                    </a>
                                    <ul className="nav-dropdown" style={ this.state.open[nav] ? { display:'block'} : {display:'none'}}>
                                    {nav.links.map((subNav)=>{
                                      return<li key={subNav}><a href={subNav.goto}>{subNav.name}</a></li>
                                    })}  
                                    </ul>
                                  </li>
                        }else{
                          return <li key={nav}> <a href={nav.goto}>{nav.name}</a> </li>
                        }
                      })
                    } 
                  </ul>
                  </nav>
              </div>
            </div>

        )
    }
}
