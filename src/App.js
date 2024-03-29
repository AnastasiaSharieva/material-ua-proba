import './App.css';
import { AppBar, Container, Toolbar, Typography, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './style';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
  const classes = useStyles();
  return (
<>
<CssBaseline />
<AppBar position='relative'>
  <Toolbar>
    <PhotoCamera className={classes.icon}/>
    <Typography variant='h6'>Photo Album</Typography>
  </Toolbar>
</AppBar>

<main>
  <div className={classes.container}>
    <Container maxWidth='sm'>
      <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
        Photo Album
      </Typography>
      <Typography variant='h5' align='center' color='textSecondary' paragraph>
        Photo Album
      </Typography>
      <div className={classes.buttons}>
        <Grid container spasing={2} justify='center'>
          <Grid item>
            <Button variant='contained' color='primary'>
              See my photos
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='primary'>
              Secondary action
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>
  <Container className={classes.cardGrid} maxWidth='md'>
    <Grid container spacing={4}>
      {cards.map((card)=>(
      <Grid item key={card} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='Image title' />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5'>Heading</Typography>
            <Typography >This is media card.This is media card.This is media card.This is media card.This is media card.This is media card.</Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>View</Button>
            <Button size='small' color='primary'>Edit</Button>
          </CardActions>
        </Card>
      </Grid>
      ))}

    </Grid>
  </Container>
    
</main>
<footer className={classes.footer}>
  <Typography variant='h6' align='center' gutterBottom>Photo Footer</Typography>
  <Typography variant='subtitle1' align='center' color='textSecondary'>Photo.Footer.Photo.Footer.</Typography>
</footer>
    </>
  );
  }


export default App;