import React, { Component } from "react";

class PurchaeDetail extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={"${className} purchase-detail"}>
        purchase detail goes here
      </div>
    );
  }
}

export default PurchaseDetail;
