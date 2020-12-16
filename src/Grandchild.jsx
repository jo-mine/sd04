import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input, Button } from 'react-onsenui';
export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <div className="title">Grandchild</div>
        <div className="content">
          <div>カウント : {this.props.count}</div>
          <hr />
          <Button modifier="large" onClick={this.props.clearCount}>Clear</Button>
        </div>
      </Card>
    );
  }
}
