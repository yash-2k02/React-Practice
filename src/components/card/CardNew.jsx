import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardDate from '../cardDate/CardDate';
import './CardNew.css'

export default function CardNew(props) {
  const { date, title, category, img } = props.data
  // console.log("insede card comp");
  // console.log(date);
  // console.log(title);
  return (
    <Card 
      orientation="horizontal"
      variant="outlined"
      sx={{
        width: 450,
        minHeight: 150,
        borderRadius: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          transform: 'scale(1.02)',
          transition: '0.3s ease-in-out',
        },
      }}
    >
      <img 
        src={img}
        alt={title}
        loading="lazy"
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'contain',
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 2,
          gap: 1,
        }}
      >
        <Typography level="title-md" fontWeight="lg">
          {title}
        </Typography>
        <Typography level="body-sm" color="neutral">
          {category}
        </Typography>
        <Typography level="body-xs" color="neutral">
          <CardDate date={date} />
        </Typography>
      </CardContent>
    </Card>
  );
}

















// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import CardDate from '../cardDate/CardDate';
// import './CardNew.css';
// import { Card } from '@mui/material';

// export default function CardNew(props) {
//   const { date, title, category, img, year } = props.data;

//   return (
//     <Card className="custom-card">
//       <img
//         src={img}
//         alt={title}
//         loading="lazy"
//         className="custom-image"
//       />
//       <CardContent className="custom-card-content">
//         <Typography level="title-md" fontWeight="lg">
//           {title}
//         </Typography>
//         <Typography level="body-sm" color="neutral">
//           {category}
//         </Typography>
//         <Typography level="body-xs" color="neutral">
//           <CardDate date={date} />
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }