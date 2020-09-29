import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dish extends Component {

    constructor(props) {
        super(props);

    }


    renderDish(dish) {
        if (dish != null) {
           return(
               <Card>
                   <CardImg width="100%" object src={dish.image} alt={dish.name} />
                   <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                   </CardBody>
               </Card>
           );
        }
        else {
            return(
                <div>
                </div>
            );
        }
    }

    renderComments(dish2) {
        if (dish2 != null) {
            var commentList = dish2.comments.map(comment => {
                return(
                    <li key={Comment.id}>
                        {comment.comment}
                        <br />
                        -- {comment.author}, {comment.date}
                        <br />
                    </li>
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }


    render() {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
               <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
               </div>
            </div>
            
        );
    }
}

export default Dish;