import { Cookies } from 'react-cookie';
import Home from '../modules/Home'
let listPokemon= []

const cookies = new Cookies();

const IndexPage = ({listPokemon, user}) => {
  return(
    <Home pokemons={listPokemon} user={user}/>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  let pokemons = await fetch("http://localhost:3000/pokemon")
  let data = await pokemons.json()
  let token=""
  if (ctx.req) {
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
  else {
    token = cookies.get('token')
  }
  console.log(token)
  return {listPokemon: data, user: token}
}
export default IndexPage