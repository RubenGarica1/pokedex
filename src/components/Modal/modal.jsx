import React, { Component } from "react";
import Image from 'next/image'
import { modal, bg, titleProduct, icon,modalClose } from "./modal.module.css";

export class Modal extends Component {
  render() {
    return (
      <>
      
        {this.props.open ? (
          <div
            className={bg}
            onClick={() => this.props.modalFunction(false)}
          ></div>
        ) : null}
        <div className={this.props.open?modal:modalClose}>
          <div className={icon} onClick={() => this.props.modalFunction(false)}><Image width="15" alt="card" height="15" layout="fixed" src="/close.svg" priority={true} quality={1}/></div>
          <div className={titleProduct}>{this.props.title}</div>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
