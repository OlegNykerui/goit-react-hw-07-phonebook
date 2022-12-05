import { useSelector } from 'react-redux';
import nextId from 'react-id-generator';
import ContactItem from './ContactItem';

import { List } from '../Form/Form.styled';

export const ContactsList = () => {
  const filterState = useSelector(state => state.filter);
  const filteredContacts = useSelector(state => {
    return state.contacts.filter(item =>
      item.name.toLowerCase().includes(filterState.toLowerCase())
    );
  });
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={nextId()}
            id={id}
            name={name}
            number={number}
          ></ContactItem>
        );
      })}
    </List>
  );
};
