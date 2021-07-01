import React, { Component } from "react";

export class FormInput extends Component {
  render() {
    const { classname, title, type, placeholder, input } = this.props;
    return (
      <div className={`${className} form-input`}>
        <label> className='form-input__label'{title}</label>
        <input>
          {" "}
          className='form-input__input' type={type} placeholder={placeholder}{" "}
          {...input}
        </input>
      </div>
    );
  }
}
