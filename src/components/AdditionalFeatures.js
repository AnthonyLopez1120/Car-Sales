import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux"
import { addItem } from "../actions/actions"

const AdditionalFeatures = props => {
  return (
    
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeature.length > 0  ? (
        <ol type="1">
          {props.additionalFeature.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItem = {props.addItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )} 

      {console.log(props.store)}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {additionalFeature: state.additionalFeatures}
}


export default connect(mapStateToProps, { addItem }) (AdditionalFeatures);
