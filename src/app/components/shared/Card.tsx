import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import {Typography, List, Card, Box} from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Bike, Count} from '@/app/types/bikes';
import styles from "@/app/page.module.css";
import { count } from 'console';
import DateIcon from '@mui/icons-material/CalendarMonth';
import LocationIcon from '@mui/icons-material/LocationCity';

// components/ChildComponent.tsx

type BikeCardProps = {
  items: Bike[];
};

const BikeCard: React.FC<BikeCardProps> = ({ items }) => {
  // default image
  const defaultImgUrl = 'https://bikeindex.org/assets/revised/bike_photo_placeholder-ff15adbd9bf89e10bf3cd2cd6c4e85e5d1056e50463ae722822493624db72e56.svg';
  return (
    <div>
      <List>
        {items.map((item, index) => (
          <Card key={item.id} className={styles.bikeCard} sx={{ display: 'flex'}}>
          <CardMedia
            component="img"
            className={styles.imgWidth}
            image={item.thumb || defaultImgUrl }
            alt="Live from space album cover"
          />
          <Grid container className={styles.detailsWidth} spacing={2}>
            <Grid size={12}>
              <Typography variant="h6" sx={{mb: 1}} color='secondary'>{item.title}</Typography>
              <Typography sx={{display: 'block'}} variant="caption">
                <DateIcon sx={{width: '20px', height: '16px', textAlign: 'center', justifyContent: 'center',color: 'secondary'}}  />
                stolen date : {item.date_stolen}
              </Typography>
              <Typography sx={{display: 'block'}} variant="caption">
              <LocationIcon sx={{width: '20px', height: '16px', textAlign: 'center', justifyContent: 'center',color: 'secondary'}}  />
                stolen location : {item.stolen_location}
              </Typography>
              <Typography sx={{mt: 1}}>{item.description}</Typography>
            </Grid>
        </Grid>
        </Card>
        ))}
      </List>
    </div>
  );
};

export default BikeCard;
