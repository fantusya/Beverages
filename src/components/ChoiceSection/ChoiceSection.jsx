import { useState } from 'react';

import { Section, Container, SectionTitle } from 'constants/GlobalStyle';
import ChoiceForm from 'components/ChoiceForm';

const ChoiceSection = () => {
  const [ingredients, setIngredients] = useState({});

  console.log(ingredients);

  //   const handleSubmit = values => {
  //     console.log(values);
  //   };

  return (
    <Section>
      <Container>
        <SectionTitle>Choose anything you want...</SectionTitle>
        <ChoiceForm onSubmit={setIngredients} />
      </Container>
    </Section>
  );
};

export default ChoiceSection;
