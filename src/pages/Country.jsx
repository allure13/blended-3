import { Container, CountryInfo, Heading, Loader, Section } from 'components';
import useFetchCountry from '../hooks/useFetchCountry';

const Country = () => {
  const { country, isLoading, error } = useFetchCountry();

  // console.log(country, isLoading, error);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong. Try reload" bottom />}
        {country && <CountryInfo country={country}/>}
      </Container>
    </Section>
  );
};
export default Country;
