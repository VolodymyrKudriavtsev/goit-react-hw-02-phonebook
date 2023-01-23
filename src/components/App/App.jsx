import { Component } from 'react';
import { Container } from './App.styled';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import shortid from 'shortid';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    for (const contact of this.state.contacts) {
      if (name === contact.name) return alert(`${name} is alrady in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  chandgeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onchandgeFilter={this.chandgeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
