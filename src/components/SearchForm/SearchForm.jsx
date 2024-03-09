import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({onHandleSubmit}) => {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    setQuery(e.target.value)}

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return;
    onHandleSubmit(query)
  }



  return <form className={styles.form} onSubmit={handleSubmit}>
  <button className={styles.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <select
    aria-label="select"
    className={styles.select}
    name="region"
    required
    value={query}
    onChange={handleChange}
  >
    <option disabled value="">
      Select a region
    </option>
    {regions.map(({id, name, value}) => (<option value={value} key={id}>{name}</option>
))}
  </select>
</form>
;
};


