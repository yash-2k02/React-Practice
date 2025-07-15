// export default function Card({userData}) {
// console.log("Log from card component");
//     console.log(userData);
//   return (
//     <>
//       {/* <h1>{userData.gender}</h1>
//       <img src={userData.picture.large} alt="" /> */}
//     </>
//   )
// }

import './CardNew.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardNew({userData}) {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={userData.picture.large}
        className='image-fit'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}