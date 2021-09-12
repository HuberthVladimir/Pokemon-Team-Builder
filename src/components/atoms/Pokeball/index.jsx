import BottomBall from '../../../assets/bottomPokeball.svg'
import './style.scss'

export const Pokeball = (props) => {
   return (
      <div className="pokeball" style={{ marginLeft: props.index >= 3 ? '2rem' : '' }}>
         <div className={`topPokeball  ${props.type}`} />
         <img className="bottomPokeball" src={BottomBall} alt="bottom pokemon" />
         <img className="pokemonImage" src={props.image} alt={props.name} />
      </div>
   )
}