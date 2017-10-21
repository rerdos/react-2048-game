import React from 'react';
import { connect } from 'react-redux';
import actions from './../actions';
import { bindActionCreators } from 'redux';

const { newBoard, generateNumbers, swipeDown } = actions;

const controlPanel = ({ actions }) => (
  <div>
    <button onClick={actions.newBoard}>New Game</button>
    <button onClick={actions.generateNumbers}>Next round</button>
    <button onClick={actions.swipeDown}>Swipe down</button>
  </div>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ newBoard, generateNumbers, swipeDown }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(controlPanel);