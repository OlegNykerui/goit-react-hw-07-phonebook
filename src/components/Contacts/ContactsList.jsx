import { useSelector } from 'react-redux';
import nextId from 'react-id-generator';
import ContactItem from './ContactItem';
import { useGetContactsQuery } from 'api';

import { List } from '../Form/Form.styled';

const getContacts = (contacts, filter) => {
  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter)
  );
};

export const ContactsList = () => {
  const filterState = useSelector(state => state.filter);
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <h2>Loading......</h2>
      ) : data.length > 0 ? (
        <List>
          {getContacts(data, filterState).map(({ id, name, number }) => {
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
      ) : (
        <h2>No contacts yet</h2>
      )}
    </>
  );
};
