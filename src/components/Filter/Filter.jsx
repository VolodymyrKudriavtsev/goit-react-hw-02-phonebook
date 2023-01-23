import { Filtration } from './Filter.styled';

const Filter = ({ value, onchandgeFilter }) => {
  return (
    <Filtration>
      <label>
        Find contacts by name
        <input
          value={value}
          onChange={onchandgeFilter}
          type="text"
          name="filter"
        />
      </label>
    </Filtration>
  );
};

export default Filter;
