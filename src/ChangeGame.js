import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJvYXJkJTIwZ2FtZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'game1',
    width: '40%',
    to: '/game'
  },
  {
    url: 'https://image.shutterstock.com/image-vector/lets-play-neon-sign-bright-260nw-1310883713.jpg',
    title: 'game2',
    width: '30%',
    to: '/game2'
  },
  {
    url: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    title: 'game3',
    width: '30%',
    to: '/game3'
    
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
      <div style={{ marginTop: '200px'}}>

<h1 style={{textAlign: 'center'}}> Try to play one of this games </h1>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', minWidth: 300, width: '100%' }}>
       
      {images.map((image) => (
          
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >

          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
              <Link to={image.to} style={{textDecoration: 'none'}}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >

              {image.title}
              
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
            </Link>
          </Image>
        </ImageButton>
       
      ))}
       <Link to='/top' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 40 }}>
                <div style={{ backgroundColor: 'rgb(245, 86, 136)', padding: 10, color: 'white', fontSize: 22, borderWidth: 2, borderColor: 'rgb(224, 32, 98)', width: 200 , textAlign: 'center'}} >
                   Show Top
                </div>
            </Link>
    </Box>
    </div>
  );
}