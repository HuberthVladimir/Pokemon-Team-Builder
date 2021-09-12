import BottomBall from '../../../assets/bottomPokeball.svg'
import './style.scss'
import { useAppProvider } from '../../../services/context'

export const Pokeball = (props) => {
   const { isPokeballSelected, setIsPokeballSelected } = useAppProvider()

   const handlePokemonClick = () => {
      //ao clicar no pokemon, e verificado se o pokemon clicado é igual ao anterior
      //caso seja verdadeiro, ele tera um toggle para se o pokemon foi selecionado ou n
      //caso o pokemon seja diferente do selecionado anteriormente é setado como verdadeiro(isActived)
      if (props.name === isPokeballSelected.name) {
         setIsPokeballSelected({ ...isPokeballSelected, isActived: !isPokeballSelected.isActived })
      } else {
         setIsPokeballSelected({ name: props.name, id: props.id, isActived: true })
      }
   }

   return (
      <div
         className="pokeball"
         style={{
            marginLeft: props.index >= 3 ? '2rem' : '',
         }}
         onClick={handlePokemonClick}>
         <div className={`topPokeball  ${props.type}`}
            style={{
               //caso algum pokemon esteja selecionado, vai ser feita a verificação se o pokemon selecionado é o mesmo
               //  que esta sendo clicado, caso seja verdadeiro ele n recebe a saturação
               filter: isPokeballSelected.isActived
                  ?
                  (isPokeballSelected.isActived && props.name === isPokeballSelected.name) ? 'none' : 'saturate(10%)'
                  :
                  'none'
            }}
         />
         <img className="bottomPokeball" src={BottomBall} alt="bottom pokemon" />
         <img className="pokemonImage" src={props.image} alt={props.name}
            style={{
               filter: isPokeballSelected.isActived
                  ?
                  (isPokeballSelected.isActived && props.name === isPokeballSelected.name) ? 'none' : 'saturate(10%)'
                  :
                  'none'
            }}
         />
      </div>
   )
}