import React from 'react';
import { connect } from 'react-redux';

const board = ({ board }) => (
  <div>
    {board.map((row, index) => (
      <div key={index}>
        {row.map((cell, index) => (
          <span key={index}>{cell}</span>
        ))}
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ board }) => ({ board });

export default connect(mapStateToProps)(board);