import Topball from '../../../assets/topPokeball.svg'
import './style.scss'

export const TopPokeball = (props) => {
   return (
      <img className={`topPokeballFilter ${props.className}`} src={Topball} alt="pokeball superior" />
   )
}
