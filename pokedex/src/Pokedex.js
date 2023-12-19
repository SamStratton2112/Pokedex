import './Pokedex.css';
import { Pokecard } from './Pokecard';


const Pokedex = (props)=>(
    <>
    <div className="Pokedex">
        <h1>Pokedex</h1>
        <div className="Pokedex-cards">{props.pokemon.map(p=>(<Pokecard name={p.name} id={p.id} type={p.type} base_experience={p.base_experience}/>))}
        </div>
    
    </div>
    </>
)   


export {Pokedex};