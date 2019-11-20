import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col, Slider } from "antd";

class App extends React.Component {
  q1 = {};

  q2 = {};

  q3 = {};

  constructor() {
    super();
    this.state = {
      q1Key: 1,
      q2Key: 1,
      q3Key: 2
    };
    [1, 2, 3, 4, 5, 6].forEach((value, i) => {
      this.q1[i] = value;
    });
    [1, 2, 3, 4, 5, 6].forEach((value, i) => {
      this.q2[i] = value;
    });
    [1, 2, 3, 4, 5, 6].forEach((value, i) => {
      this.q3[i] = value;
    });
  }

  onQ1Change = q1Key => {
    this.setState({ q1Key });
  };

  onQ2Change = q2Key => {
    this.setState({ q2Key });
  };

  onQ3Change = q3Key => {
    this.setState({ q3Key });
  };

  render() {
    const { q1Key, q2Key, q3Key } = this.state;
    const cols = [];
    const q3 = this.q3[q3Key];
    let colCode = "";
    for (let i = 0; i < q3; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / q3}>
          <div>Column</div>
        </Col>
      );
      colCode += `  <Col span={${24 / q3}} />\n`;
    }
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 6 }}>
            1. In the last one year, were/ was your colleagues/ workplace
            supportive of your chronic condition(s) management efforts in the
            way you needed it?
          </span>
          <div style={{ width: "50%" }}>
            <Slider
              min={0}
              max={Object.keys(this.q1).length - 1}
              value={q1Key}
              onChange={this.onQ1Change}
              marks={this.q1}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>
            2. In the last one month, did you feel that all your efforts to
            manage your chronic condition(s) were useless?{" "}
          </span>
          <div style={{ width: "50%" }}>
            <Slider
              min={0}
              max={Object.keys(this.q2).length - 1}
              value={q2Key}
              onChange={this.onQ2Change}
              marks={this.q2}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>
            3. In the last one month, did you feel scared when you thought about
            living with chronic condition(s)?
          </span>
          <div style={{ width: "50%" }}>
            <Slider
              min={0}
              max={Object.keys(this.q3).length - 1}
              value={q3Key}
              onChange={this.onQ3Change}
              marks={this.q3}
              step={null}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
