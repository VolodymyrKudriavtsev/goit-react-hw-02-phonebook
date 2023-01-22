import { Component } from 'react';
import { Form } from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  // handleInputChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.props.formSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  // addContact = e => {
  //   e.preventDefault();
  //   const { name, number } = e.target.elements;

  //   console.log(name.value);
  //   console.log(number.value);
  //   console.log(newContact);
  //   console.log(this.state.contacts);
  //   e.target.reset();
  // };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            // value={this.state.name}
            // onChange={this.handleInputChange}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </label>
        <br />
        <label>
          Number
          <input
            // value={this.state.number}
            // onChange={this.handleInputChange}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;
