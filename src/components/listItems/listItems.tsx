import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import Item from "../item";
import style from './listItrems.module.css'
import Link from 'next/link'
export const listItems = ({pokemons, search}: any) => {
  const [list, setList] = useState([])
  useEffect(() => {
    let poke = pokemons.map(i=>i.name)
    if(search!=""){
      var similars = poke.filter(function(objeto){
        return objeto.includes(search);
      });
      let filter= []
      similars.map(i=> pokemons.filter(e=> e.name==i? filter.push(e): null))
      console.log(filter)
      setList(filter)
    } else {
      setList(pokemons)
    }
  });
  return (
    <div className={style.listPokemon}>
      {list!=[]? list.map((i: any, index: number)=>
        <Link href={`/item/${i.id}`}>
        <div key={index}>
          <Item
            name={i.name}
            image={i.image}
            number={i.id}
            types={i.types}
            />
        </div>
        </Link>
      ):null}
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(listItems);
