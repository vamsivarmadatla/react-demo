import React from "react";
import {connect} from "react-redux"

const NewItemContainer = (props) => {
  return (
    <div>
          <h2> item - {props.item}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
      : state.iceCream.numOfIceCreams;
    
    return {
        item: itemState
    }
};


export default connect(mapStateToProps) (NewItemContainer);
