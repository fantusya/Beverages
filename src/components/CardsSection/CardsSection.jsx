// import { useState, useEffect } from 'react';
// import { Box } from 'components/Box/Box';
import { Section, Container, SectionTitle } from 'constants/GlobalStyle';

// import { fetchingCocktails, fetchingByName } from 'services/cocktailsApi';
// import { Status } from 'constants/status';
import { cocktailsArray } from 'data/cocktailsList';

import Filter from 'components/Filter';
import CocktailsList from 'components/CocktailsList';

// const CardsSection = () => {
//   const [status, setStatus] = useState(Status.IDLE);
//   const [cocktails, setCocktails] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     // (async () => {
//     //   setTrendingMovies(await fetchTrendingMovies());
//     // })();
//     async function getCocktails() {
//       setStatus(Status.PENDING);

//       try {
//         const cocktails = await fetchingCocktails();
//         setCocktails(prevState => [...prevState, ...cocktails]);
//         setStatus(Status.RESOLVED);
//       } catch (error) {
//         setStatus(Status.REJECTED);
//       }
//     }

//     getCocktails();
//   }, []);

//   const getVisibleCocktails = () => {
//     return cocktails.filter(cocktail =>
//       cocktail.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   return (
//     <Section>
//       <Container>
//         <CardsTitle>Search anything you want...</CardsTitle>
//         <Filter
//           value={filter}
//           onChange={e => setFilter(e.currentTarget.value)}
//         />
//         <CocktailsList cocktailsArray={getVisibleCocktails()} />
//       </Container>
//     </Section>
//   );
// };

const CardsSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Search anything you want...</SectionTitle>
        <Filter />
        <CocktailsList cocktailsArray={cocktailsArray} />
      </Container>
    </Section>
  );
};

export default CardsSection;
