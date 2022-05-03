import React from 'react';
import { Pokemon } from '../App'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

interface Props {
    poke: Pokemon,
}
const PokemonCard: React.FC<Props> = ({ poke }) => {
    return (
        <Box sx={{
            boxShadow: 1,
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            height: '200px',
            transition: 'transform .3s ease',
            '&:hover': {
                transform: 'scale(1.1)'
            }

        }}>
            <img width='100%' height='160px' src={poke.sprites.front_default} alt="" />
            <Typography variant='subtitle1' component='h2'>{poke.name}</Typography>
        </Box>

    );
};

export default PokemonCard;