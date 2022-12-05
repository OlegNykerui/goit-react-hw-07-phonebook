// import { deleteContactAction } from 'redux/slices/contactSlice';
import { useDeleteContactsMutation } from 'api';

import { Item, ButtonDelete } from '../Form/Form.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  return (
    <>
      <Item>
        {`${name} : tel - ${number}`}

        <ButtonDelete onClick={() => deleteContacts(id)} type="button">
          {isLoading ? 'Delete....' : 'Delete'}
        </ButtonDelete>
      </Item>
    </>
  );
};

export default ContactItem;
