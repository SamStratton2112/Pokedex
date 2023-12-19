import './Pokecard.css'

const Pokecard = ({name, id, type, base_experience})=>{
  let imgUrl= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return(
    <div className="Pokecard">
      <h1 className="Pokecard-h1">{name}</h1>
      <img src={imgUrl} alt="" className="Pokecard-img"/>
      <p className="Pokecard-type-exp">Type: {type}<br></br> EXP: {base_experience}</p>
    </div>
  )
}

export {Pokecard};