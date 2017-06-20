import React from 'react';

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

  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '100',
      background: '#fff'
    };

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '50',
      background: 'rgba(0, 0, 0, 0.3)'
    };

    if (this.props.mode === 'login') {
      return <div className="modal backdrop" style={ backdropStyle }>
        <div className="modal-body" style={ modalStyle }>
          <button onClick={ () => this.props.closeModal() }>Close X</button>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Name:
              <input type="text" value={ this.state.valueName } onChange={ this.handleChangeName } minLength={ 5 }
                     maxLength={ 15 } pattern="[A-Za-z-\s]*"
                     title="minimum 5 characters, maximum 15characters, where only English characters, space, - are allowed"
                     required/>
            </label>
            <label>
              Amount:
              <input type="text" pattern="[0-9]*" value={ this.state.valueAmount } maxLength={ 15 } onChange={ this.handleChangeAmount } title="max length of 15characters, only numbers are allowed" required/>
            </label>
            <label>
              Currency:
              <select value={ this.state.valueCurrency } onChange={ this.handleChangeCurrency }>
                <option value="Euro">Euro</option>
                <option value="Dollar">Dollar</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>;
    }
    if (this.props.mode === 'update') {
      return <div className="modal backdrop" style={ backdropStyle }>
        <div className="modal-body" style={ modalStyle }>
          <button onClick={ () => this.props.closeModal()}>Close X</button>
          <form onSubmit={ this.handleSubmit }>
            <label>
              Amount:
              <input type="number" value={ this.state.valueAmount } onChange={ this.handleChangeAmount } maxLength={15}
                     title="max length of 15characters, only numbers are allowed" required/>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>;
    }
  }

}
