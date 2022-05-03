import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonColections from './components/PokemonColections';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  }
}
interface Pokemons {
  name: string;
  url: string;
}
export interface IPokemonDetail extends Pokemon {
  abilities: [{
    ability: {
      name: string;
    };

  }]
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [nextUrl, setNextUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true)
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
      setNextUrl(res.data.next)
      res.data.results.forEach(async (item: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        setPokemons((prev) => [...prev, poke.data])
        setIsLoading(false)
      })
    }
    getPokemons()
  }, [])

  const handleLoadMore = async () => {
    setIsLoading(true)
    const res = await axios.get(nextUrl)
    setNextUrl(res.data.next)
    res.data.results.forEach(async (item: Pokemons) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
      setPokemons((prev) => [...prev, poke.data])
      setIsLoading(false)
    })
  }
  return (
    <div className="App">
      <header className="pokemon-header">Pokemon</header>
      <Container>
        <PokemonColections pokemons={pokemons} handleLoadMore={handleLoadMore} isLoading={isLoading} />
      </Container>
    </div>
  );
}

export default App;
