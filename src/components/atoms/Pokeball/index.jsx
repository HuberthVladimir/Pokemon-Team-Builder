import BottomBall from '../../../assets/bottomPokeball.svg'
import './style.scss'

export const Pokeball = (props) => {
   return (
      <>
         <div className="pokeball">
            <div className={`topPokeball ${props.className}`} />
            <img className="bottomPokeball" src={BottomBall} alt="bottom pokemon" />
            <img className="pokemonImage" src={props.iamge} alt={props.name} />
         </div>

      </>
   )
}