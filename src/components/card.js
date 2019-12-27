import React from 'react';
import { Card, CardTitle, CardText, } from 'reactstrap';
import classes from './appbar.module.scss'

const CardExample = (props) => {
  return (
    <div>
      <Card style={props.style} className={classes.cardMain} >
          <CardTitle className={classes.title}>{props.title}</CardTitle>
          <CardText className={classes.text}>{props.text}</CardText>
      </Card>
    </div>
  );
};

export default CardExample;