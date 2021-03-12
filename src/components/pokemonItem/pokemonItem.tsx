import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import style from './pokemonItem.module.css'
import Image from 'next/image'
export const pokemonItem = (props: { item: any, userReducer: any}) => {
  const [like, setLike] = useState(false)
  return (
    <div className={style.colum}>
      <div className={style.imageCol}>
        <div className={style.contentImage}>
        <Image
          alt="logo"
          src={props.item.image}
          width="130"
          height="130"
          quality={50}
          priority={true}
          />
        <div className={style.contentSubImage}>
          <div className={style.imageMin}>
            <Image
              alt="logo"
              src={props.item.photo[0]}
              width="40"
              height="40"
              quality={50}
              priority={true}
              />
          </div>
          <div className={style.imageMin}>
          <Image
            alt="logo"
            src={props.item.photo[1]}
            width="40"
            height="40"
            quality={50}
            priority={true}
            />
          </div>
          </div>
        </div>
      </div>
      <div className={style.infBox}>
      <div className={style.inf}>
        {props.userReducer.token!==''?
        <div onClick={()=>setLike(!like)}>
          {like?
          <Image
          alt="logo"
          src="/corazon.png"
          width="40"
          height="40"
          quality={50}
          priority={true}
          />
          :
          <Image
          alt="logo"
          src="/corazonGriz.png"
          width="40"
          height="40"
          quality={50}
          priority={true}
          />
          }
          </div>
          :null}
        <div className={style.name}>{props.item.name}</div>
        <div className={style.typesTabs}>{props.item.types.map((i: String, index: number)=>
        <div key={index}>
          {i=="Grass"?<div className={style.typeGrass} >{i}</div>:<div className={style.typeNormal}>{i}</div>}
          {i=="Poison"?<div className={style.typePoison} >{i}</div>: null}
          {i=="Fire"?<div className={style.typeFire} >{i}</div>: null}
        </div>
        )}</div>
        <div className={style.definit}>Pokedex Number</div>
        <div className={style.definitRes}>{props.item.id}</div>
        <div className={style.line}></div>
        <div className={style.definit}>Height</div>
        <div className={style.definitRes}>{props.item.height}</div>
        <div className={style.line}></div>
        <div className={style.definit}>Weight</div>
        <div className={style.definitRes}>{props.item.weight}</div>
        <div className={style.line}></div>
        <div className={style.definit}>Shiny</div>
        <div className={style.definitRes}>
        <div className={style.contentSubShiny}>
          <div className={style.imageMin}>
            <Image
              alt="logo"
              src={props.item.shiny[0]}
              width="40"
              height="40"
              quality={50}
              priority={true}
              />
          </div>
          <div className={style.imageMin}>
          <Image
            alt="logo"
            src={props.item.shiny[1]}
            width="40"
            height="40"
            quality={50}
            priority={true}
            />
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({userReducer}) => ({
  userReducer
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(pokemonItem)
