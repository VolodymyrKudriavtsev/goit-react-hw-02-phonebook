import PropTypes from 'prop-types';
import { Contscts } from './ContactList.styled';
import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      onDeleteContact={() => onDeleteContact(id)}
    />
  ));

  return (
    <Contscts>
      <ul>{elements}</ul>
    </Contscts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
