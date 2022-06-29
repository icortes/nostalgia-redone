import { Tv } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import { useState } from 'react';

export default function SearchBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileAnchorEl] = useState<null | HTMLElement>(
    null
  );

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Tv
            fontSize='large'
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant='h6'
            noWrap
            component={'a'}
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Gloria Hallelujah, cursive',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Nostalgia Generator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
