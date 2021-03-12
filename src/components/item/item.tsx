import React from 'react'
import { connect } from 'react-redux'
import Image from 'next/image'
import styles from './item.module.css'
type Props = {
  name: string;
  number: String;
  image: string;
  types: Array<String>;
}
export const item = ({name, number, image, types}: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nameText}>{name}</div>
        <div className ={styles.numberText}>{number}</div>
        <div>
          <Image
            alt={name}
            src={image}
            width="110"
            height="110"
            layout="fixed"
            quality={80}
          />
        </div>
        <div className={styles.typesTabs}>{types.map((i: String, index: number)=>
        <div key={index}>
          {i=="Grass"?<div className={styles.typeGrass} >{i}</div>: null}
          {i=="Poison"?<div className={styles.typePoison} >{i}</div>: null}
          {i=="Fire"?<div className={styles.typeFire} >{i}</div>: null}
        </div>
        )}</div>
      </div>
    </>
  )
}

const mapStateToProps = ({}) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(item)
