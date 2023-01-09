import { GlobalStyle } from 'constants/GlobalStyle';
import Header from './Header';
import Hero from './Hero';
import CardsSection from './CardsSection';
import ChoiceSection from './ChoiceSection';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardsSection />
        <ChoiceSection />
      </main>
      <GlobalStyle />
    </>
  );
};
