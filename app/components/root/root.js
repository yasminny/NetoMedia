import './root.scss';
import Modal from '../modal/modal';

import React from 'react';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      amount: 0,
      currency: '',
      isModalOpen: false,
      mode: ''
    };
    this.closeModal = this.closeModal.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.updateCurrency = this.updateCurrency.bind(this);
  }

  updateName(value) {
    this.setState({ name: value });
  }

  updateAmount(value) {
    this.setState({ amount: value });
  }

  updateCurrency(value) {
    this.setState({ currency: value });
  }

  closeModal() {
    return this.setState({ isModalOpen: false });
  }

  renderModal(mode) {
    return this.setState({
      mode: mode,
      isModalOpen: true
    });
  }

  renderRoot() {
    if (this.state.name.length < 5) {
      return (
        <div>
          <h1>Welcome to the Netomedia lobby</h1>
          <button type="button" onClick={ () => this.renderModal('login') }>Login</button>
        </div>
      );
    }
    const sign = this.state.currency === 'Dollar'? '$' : '€';

    return (
      <div>
        <h1>Welcome back { this.state.name }, your balance is: { this.state.amount } { sign }</h1>
        <button type="button" onClick={ () => this.renderModal('update') }>Change Balance</button>
      </div>
    );
  }

  render() {
    return (
      <div className="root">
        { this.renderRoot() }
        <Modal mode={ this.state.mode }
               isOpen={ this.state.isModalOpen }
               closeModal={ this.closeModal }
               updateName={ this.updateName }
               updateAmount={ this.updateAmount }
               updateCurrency={ this.updateCurrency }
        />
      </div>
    );
  }
}
