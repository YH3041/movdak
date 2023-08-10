import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Style from './circleRating.module.scss';

interface ICircleRating {
  rating: any;
}

const CircleRating: React.FC<ICircleRating> = ({ rating }) => {
  console.log(rating);
  return (
    <div className={Style.circleRating}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green'
        })}
      />
    </div>
  );
};

export default CircleRating;
