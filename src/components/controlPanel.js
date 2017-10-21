import React from 'react';
import { connect } from 'react-redux';
import actions from './../actions';
import { bindActionCreators } from 'redux';

const { newBoard, generateNumbers, swipeDown, swipeUp, swipeLeft, swipeRight } = actions;

const controlPanel = ({ actions }) => (
  <div>
    <button onClick={actions.newBoard}>New Game</button>
    <button onClick={actions.generateNumbers}>Next round</button>
    <button onClick={actions.swipeDown}>Swipe down</button>
    <button onClick={actions.swipeUp}>Swipe up</button>
    <button onClick={actions.swipeLeft}>Swipe left</button>
    <button onClick={actions.swipeRight}>Swipe right</button>
  </div>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({
  newBoard,
  generateNumbers,
  swipeDown,
  swipeUp,
  swipeRight,
  swipeLeft
}, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(controlPanel);