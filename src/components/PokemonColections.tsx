import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Pokemon } from '../App'
import PokemonCard from './PokemonCard';
import Grid from '@mui/material/Grid';
import PokemonDetail from './PokemonDetail';
import Button from '@mui/material/Button';
import { IPokemonDetail } from '../App'
import axios from 'axios';

interface Props {
    pokemons: Pokemon[]
    handleLoadMore: () => void,
    isLoading: boolean
}

const PokemonColections: React.FC<Props> = ({ pokemons, handleLoadMore, isLoading }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [pokeDetail, setPokeDetail] = useState<IPokemonDetail>()
    const handleOpen = async (poke: Pokemon) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        console.log(res.data)
        setPokeDetail(res.data)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            {open ? <PokemonDetail poke={pokeDetail} open={open} handleClose={handleClose} /> : ""}
            (
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                {pokemons.map((poke) => (
                    <Grid item xs={2} onClick={() => handleOpen(poke)}>
                        <PokemonCard poke={poke} />
                    </Grid>
                ))}
            </Grid>
            )
            <Box sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '30px 0'
            }}>
                {isLoading ? 'loading...' : (
                    open ? "" : <Button variant="contained" onClick={handleLoadMore}>Load more</Button>
                )}
            </Box>

        </>

    );
};

export default PokemonColections;