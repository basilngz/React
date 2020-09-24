import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

     constructor(props) {
         super(props);

         this.state = {
             dishes: [
                 {
                     id: 0,
                     name: 'Soup',
                     image: 'assets/images/soup.png',
                     category: 'starter',
                     label: 'Hot',
                     price: '60.0',
                     description: 'A unique combination of indian'
                 },
                 {
                     id: 1,
                     name: "Biriyani",
                     image: 'assets/images/biriyani.png',
                     category: 'mains',
                     label: 'Hot',
                     price: '120.0',
                     description: 'A good food'
                 },
                 {
                     id: 2,
                     name: 'Salad',
                     image: 'assets/images/salad.png',
                     category: 'side-dish',
                     label: '',
                     price: '50.0',
                     description: 'A good combination with biriyani'
                 },
                 {
                     id: 3,
                     name: 'Cheese Cake',
                     image: 'assets/images/cake.png',
                     category: 'dessert',
                     label: 'cold',
                     price: '35.50',
                     description: "A delectable, semi-sweet new cheese cake"
                 }
             ]
         }
     }
     render() {
         
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

         return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
         );
     }
}

export default Menu;