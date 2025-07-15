import { useState } from 'react';
import styles from './ModuleStyleComponent.module.css';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ronaldoImg from '../../assets/ronaldo.jpg';
import phelpsImg from '../../assets/phelps.jpg';
import boltImg from '../../assets/usain-bolt.avif';


const StyledButton = styled.button`
  border: 2px solid #4caf50;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
    color:white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;

const sportsPersons = [
  {
    name: 'Cristiano Ronaldo',
    description: 'Portuguese footballer known for his incredible goal-scoring ability and athleticism.',
    image: ronaldoImg
  },
  {
    name: 'Michael Phelps',
    description: 'American swimmer and the most decorated Olympian of all time with 23 gold medals.',
    image: phelpsImg
  },
  {
    name: 'Usain Bolt',
    description: 'Jamaican sprinter, known as the fastest man on Earth.',
    image: boltImg
  }
];


export default function ModuleStyleComponent() {
  const [count, setCount] = useState(0);

  const handleNextCLick = () => {
    setCount((count) => (count + 1) % sportsPersons.length);
  };

  const handlePrevClick = () => {
    setCount((count) => (count - 1 + sportsPersons.length) % sportsPersons.length);
  };

  const { name, description, image } = sportsPersons[count];

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
      <CardMedia
        component="img"
        alt={name}
        height="180"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <ButtonContainer>
        <button className={styles.button} onClick={handlePrevClick}>Previous</button>
        <StyledButton onClick={handleNextCLick}>Next</StyledButton>
      </ButtonContainer>
    </Card>
  );
}
