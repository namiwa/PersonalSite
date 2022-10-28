import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const PREFIX = 'ImageButton';

const classes = {
  root: `${PREFIX}-root`,
  image: `${PREFIX}-image`,
  focusVisible: `${PREFIX}-focusVisible`,
  imageButton: `${PREFIX}-imageButton`,
  imageSrc: `${PREFIX}-imageSrc`,
  imageBackdrop: `${PREFIX}-imageBackdrop`,
  imageTitle: `${PREFIX}-imageTitle`,
  imageMarked: `${PREFIX}-imageMarked`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },

  [`& .${classes.image}`]: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },

  [`& .${classes.focusVisible}`]: {},

  [`& .${classes.imageButton}`]: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },

  [`& .${classes.imageSrc}`]: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },

  [`& .${classes.imageBackdrop}`]: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },

  [`& .${classes.imageTitle}`]: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },

  [`& .${classes.imageMarked}`]: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

type Image = {
  img: string;
  image: any;
  title: string;
  author: string;
  url: string;
  width: string;
};

interface ImageButtonProps {
  images: Image[];
}

// hacky fix but input must be an array for now
export function ImageButton({ images }: ImageButtonProps) {
  return (
    <Root className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          onClick={(e) => {
            e.preventDefault();
          }}
          href={image.url} // for some reason this doesn't work
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.image})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              {<br />}
              {image.author}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </Root>
  );
}

export default ImageButton;
