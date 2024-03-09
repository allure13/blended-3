import { Container, CountryList, Heading, Loader, SearchForm, Section } from 'components';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/countryApi';


const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleSubmit = (region) => {
    setSearchParams({query: region})
  }
  const region = searchParams.get('query')

  useEffect(() => {
    if (!region) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchByRegion(region);
      
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [region]);


  return (
    <Section>
      <Container>
        <SearchForm onHandleSubmit={onHandleSubmit} />
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong. Try reload" bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
