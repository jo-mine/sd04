import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Page, Button } from 'react-onsenui';
import Child from 'Child.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, data: "" };
    this.incrementCount = this.incrementCount.bind(this);
    this.updateFromChild = this.updateFromChild.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.clearCount = this.clearCount.bind(this);
  }
  // this.state.countの値を１増やす
  incrementCount() {
    var state = this.state;
    state.count += 1;
    this.setState(state); // this.stateを更新
  }
  decrementCount() {
    var state = this.state;
    state.count -= 1;
    this.setState(state);
  }
  clearCount() {
    var state = this.state;
    state.count = 0;
    this.setState(state);
  }
  // Childから呼び出される関数
  // value: 子から渡されるデータ
  updateFromChild(value) {
    var state = this.state;
    state.data = value;
    this.setState(state); // this.stateを更新
  }
  render() {
    return (
      <Page>
        <Card>
          <div className="title">App</div>
          <div className="content">
            <div>カウント : {this.state.count}</div>
            <Button modifier="large" onClick={this.incrementCount}>Up</Button>
            <div>Childで入力された内容：{this.state.data}</div>
            {/* AppのcountとupdateFromChildを渡して、propsで参照できるようにする */}
            <Child count={this.state.count} updateFromChild={this.updateFromChild} decrementCount={this.decrementCount} clearCount={this.clearCount} />
          </div>
        </Card>
      </Page>
    );
  }
}