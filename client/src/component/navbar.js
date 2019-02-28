import React from "react"
import NavBarCss from '../css/NavBar.css'
class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sitename: 'matthews-tyler.com',
      titleLink: 'http://google.com',
      dropdown: 'dropdown-hide',
      dropdownButton: 'dropdownButton-show'
    }
  }

  openDropdown = () => {
    this.setState({
      dropdownButton: 'dropdownButton-hide',
      dropdown: 'dropdown-show'
    });
    document.addEventListener('click', this.closeDropdown);
  }

  closeDropdown = () => {
    this.setState({
      dropdownButton: 'dropdownButton-show',
      dropdown: 'dropdown-hide'
    });
    document.removeEventListener('click', this.closeDropdown);
  }

  links = () => {
    console.log("WORKS");
  }


  render(){
    return(
      <div class="navbar">
      {/*Stuff here*/}
        <div class="row test">

        {/*DEFAULT -- TITLE ALWAYS THERE*/}

          {/*MOBILE BELOW*/}
            <div class="col-1-mobile">
              <a href={this.state.titleLink} id="title" class="text"><p>Matthews-Tyler.com</p></a>
            </div>
            <div class="col-2-mobile"> {/*Dead Space*/}</div>
            <div class="col-1-mobile parent-menu">
              <p class='border-menu text'>Menu</p>
            </div>

            <div class="sub-menu">
              <div class="row">
                <div class="col-2-mobile"> {/*Dead Space*/}</div>
                <div class="col-2-mobile2"> {/*Dead Space*/}</div>
                <div class="col-1-mobile">
                  <p onClick={this.Links} class="text">About</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2-mobile"> {/*Dead Space*/}</div>
                <div class="col-2-mobile2"> {/*Dead Space*/}</div>
                <div class="col-1-mobile">
                  <p onClick={this.Links} class="text">Links</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2-mobile"> {/*Dead Space*/}</div>
                <div class="col-2-mobile2"> {/*Dead Space*/}</div>
                <div class="col-1-mobile">
                  <p class="text">Projects</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2-mobile"> {/*Dead Space*/}</div>
                <div class="col-2-mobile2"> {/*Dead Space*/}</div>
                <div class="col-1-mobile">
                  <p class="text">Contact</p>
                </div>
              </div>
            </div>

          {/*MIDSISZED BELOW*/}
            <div class="col-3-midSize">
              <a href={this.state.titleLink} id="title" class="text"><p>Matthews-Tyler.com</p></a>
            </div>
            <div class="col-4-midSize">{/*Dead Space*/}</div>
            <div class="col-05-midSize">{/*Dead Space*/}</div>

            <div class="col-1-midSize">
              <p class="text">About</p>
            </div>

            <div class="col-1-midSize">
              <p class="text">Projects</p>
            </div>

            <div class="col-1-midSize">
              <p class="text">Links</p>
            </div>
            <div class="col-1-midSize">
              <p class="text">Contact</p>
            </div>
            <div class="col-05-midSize">{/*Dead Space*/}</div>

          {/*DESKTOP BELOW*/}

            <div class="col-2">
              <a href={this.state.titleLink} id="title" class="text"><p>Matthews-Tyler.com</p></a>
            </div>

            <div class="col-5">{/*Dead Space*/}</div>
            <div class="col-05">{/*Dead Space*/}</div>

            <div class="col-1">
              <p class="text">About</p>
            </div>

            <div class="col-1">
              <p class="text">Projects</p>
            </div>

            <div class="col-1">
              <p class="text">Links</p>
            </div>

            <div class="col-1">
              <p class="text">Contact</p>
            </div>
            <div class="col-05">{/*Dead Space*/}</div>
        </div>
      </div>
    )
  }
}

export default NavBar;
