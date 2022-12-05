import { useDispatch, useSelector } from 'react-redux';
import { changeAction } from 'redux/slices/filterSlice';
import { Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <Input
        onChange={e => dispatch(changeAction(e.target.value))}
        type="text"
        value={filter}
        name="filter"
        id="filter"
      />
    </div>
  );
};
