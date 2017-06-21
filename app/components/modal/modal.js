import React from 'react';
import './modal.scss';

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      valueName: '',
      valueAmount: 0,
      valueCurrency: 'Dollar'
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  handleChangeName(event) {
    this.setState({ valueName: event.target.value });
  }

  handleChangeAmount(event) {
    this.setState({ valueAmount: event.target.value });
  }

  handleChangeCurrency(event) {
    this.setState({ valueCurrency: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateName(this.state.valueName);
    this.props.updateAmount(this.state.valueAmount);
    this.props.updateCurrency(this.state.valueCurrency);
    this.close(event);
  }

  close(e) {
    e.preventDefault();

    return this.props.closeModal();
  }

  renderLogin(amountTitle) {
    const nameTitle = 'use 5 to 15 characters and only use English characters, space and -';

    return (
      <div className="modal backdrop">
        <div className="modal-body">
          <button onClick={ () => this.props.closeModal() }>Close X</button>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Name:
              <input type="text"
                     value={ this.state.valueName }
                     onChange={ this.handleChangeName }
                     minLength={ 5 }
                     maxLength={ 15 }
                     pattern="[A-Za-z-\s]*"
                     title={ nameTitle }
                     required
              />
            </label>
            <br />
            <label>
              Amount:
              <input type="text"
                     pattern="[0-9]*"
                     value={ this.state.valueAmount }
                     maxLength={ 15 }
                     onChange={ this.handleChangeAmount }
                     title={ amountTitle }
                     required
              />
            </label>
            <br />
            <label>
              Currency:
              <select value={ this.state.valueCurrency }
                      onChange={ this.handleChangeCurrency }
              >
                <option value="Euro">Euro</option>
                <option value="Dollar">Dollar</option>
              </select>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }

  renderUpdate(amountTitle) {

    return (
      <div className="modal backdrop" style={ backdropStyle }>
        <div className="modal-body" style={ modalStyle }>
          <button onClick={ () => this.props.closeModal()}>Close X</button>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Amount:
              <input type="text"
                     pattern="[0-9]*"
                     value={ this.state.valueAmount }
                     maxLength={ 15 }
                     onChange={ this.handleChangeAmount }
                     title={ amountTitle }
                     required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const amountTitle = 'use up to 15 characters and only use numbers';

    if (this.props.mode === 'login') {

      return this.renderLogin(amountTitle);
    }
    if (this.props.mode === 'update') {

      return this.renderUpdate(amountTitle);
    }
  }

}
