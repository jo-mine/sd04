import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input, Button } from 'react-onsenui';
import Grandchild from 'Grandchild.jsx';
export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
    this.updateInputText = this.updateInputText.bind(this);
  }
  updateInputText(event) {
    this.setState({ inputText: event.target.value }) // Childのstateを更新
    this.props.updateFromChild(this.state.inputText); // AppのupdateFromChildを呼び出す
  }
  render() {
    return (
      <Card>
        <div className="title">Child</div>
        <div className="content">
          <div>カウント : {this.props.count}</div>
          <hr />
          <div>Childで入力したテキスト={this.state.inputText}</div>
          <Input value={this.state.inputText}
            onChange={this.updateInputText}
            modifier="material"
            placeholder="テキストを入力" />
          <Button modifier="large" onClick={this.props.decrementCount}>Down</Button>

          <Grandchild count={this.props.count} clearCount={this.props.clearCount} />
        </div>
      </Card>
    );
  }
}
