import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap'; 

class Header extends Component {
    render() {
        return(
            <>
            <Navbar dark>
            <div className="container">
                <NavbarBrand href="/">Ristornate Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristornate Con Fusion</h1>
                            <p>We take inspiration from the world's best cuisiones, and crate a unique fusion experience. Our lipsmacking creations wil tickle your culinary senses! </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        );
    }
}

export default Header;