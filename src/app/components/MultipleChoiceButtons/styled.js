import styled from '@emotion/native';

export const CircleChoice = styled.View`
  background-color: ${({active}) => (active ? '#0D374D' : 'lightgray')};
  height: 25;
  width: 25;
  border-radius: 20;
`;
