import React from 'react';
import { connect } from 'react-redux';
import './board.css';

const board = ({ board }) => (
  <div className='board'>
    {board.map((row, index) => (
      <div className='board__row' key={index}>
        {row.map((cell, index) => (
          <div className='board__column' key={index}>
            <div className={`board__numberContainer board__${cell}`}>
              {cell ? cell : ''}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ board }) => ({ board });

export default connect(mapStateToProps)(board);