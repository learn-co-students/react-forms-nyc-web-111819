import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>{this.state.firstName} </label>
        <input type="text" name="firstName" onChange={this.handleNameChange} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={this.handleNameChange} value={this.state.lastName} />
        <input type="submit"/>
      </form>
      {this.listOfSubmissions()}
      </div>
    );
  }
}

export default Form;