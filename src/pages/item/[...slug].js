import React from 'react'
import { Cookies } from 'react-cookie';
import Item from '../../modules/item'
const cookies = new Cookies();

  const ProductoItem = ({ props }) => {
    return (
      <>
        <Item item={props.item}/>
      </>
    )
}
ProductoItem.getInitialProps = async (ctx) => {
  let pokemons = await fetch("http://localhost:3000/pokemon")
  let data = await pokemons.json()
  let item = await data.find(e=> e.id==ctx.query.slug[0]?e: null)
  console.log(item)
  let token=""
  if (ctx.req) {
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }
  else {
    token = cookies.get('token')
  }
  console.log(token)
  return {props: {slug: ctx.query.slug[0], item, user: token}}
}
export default ProductoItem
