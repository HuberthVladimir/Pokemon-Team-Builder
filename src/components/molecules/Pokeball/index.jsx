import { TopPokeball } from '../../atoms/TopPokeball'
import { BottomPokeball } from '../../atoms/bottomPokeball'
import './style.scss'

export const Pokeball = () => {
   return (
      <div className="pokeball">
         <TopPokeball />
         <BottomPokeball />
      </div>
   )
}