import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  render() {
    console.log("check childs property", this.props);
    console.log("check childs open model", this.props.isOpen);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        size="lg"
        className={"modal-uer-container"}
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password"></input>
            </div>
            <div className="input-container">
              <label>First name</label>
              <input type="text"></input>
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input type="text"></input>
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input type="text"></input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Save changes
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
