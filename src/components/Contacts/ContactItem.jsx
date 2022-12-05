import { useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/slices/contactSlice';

import { Item, ButtonDelete } from '../Form/Form.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Item>
        {`${name} : tel - ${number}`}

        <ButtonDelete
          onClick={() => dispatch(deleteContactAction(id))}
          type="button"
        >
          Delete
        </ButtonDelete>
      </Item>
    </>
  );
};

export default ContactItem;
