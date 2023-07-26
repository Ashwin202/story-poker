import React from 'react';

interface Props {
  firstName: string;
  lastName: string;
}

const TwoLetterWord: React.FC<Props> = ({ firstName, lastName }) => {
  // Extract the first word from the first name
  const firstNameFirstWord = firstName.split(' ')[0];
  // Extract the first word from the last name
  const lastNameFirstWord = lastName.split(' ')[0];

  // Take the first two letters from each word and make them uppercase
  const firstTwoLetters = (firstNameFirstWord.slice(0, 1) + lastNameFirstWord.slice(0, 1)).toUpperCase();

  return (
    <>
     {firstTwoLetters}
    </>
  );
};

export default TwoLetterWord;
