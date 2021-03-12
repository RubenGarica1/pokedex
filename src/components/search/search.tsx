import React from 'react'
import { connect } from 'react-redux'
import styles from './search.module.css'
import Image from 'next/image'
import Link from 'next/link'
type Props = {
  placeholder: string;
  inputText: String;
  inputSet: Function;
  handleSearch: Function;
  back: Boolean;
}

export const search = ({placeholder, inputText, inputSet, handleSearch, back}: Props) => {
  return (
    <>
      {back?
      <Link href="/">
        <div className={styles.back}>
          <Image
            alt="logo"
            src="/Back.svg"
            width="20"
            height="20"
            quality={50}
            priority={true}
            />
        </div>
      </Link>
      :null}
    <div className={styles.container}>
      <div><input className={styles.searchInput} onChange={event=>{inputSet(event.target.value); console.log(inputText)}} type="text" placeholder={placeholder}/></div>
      <div className={styles.iconLupa} onClick={()=>handleSearch(inputText)}>
        <Image
          alt="logo"
          src="/Search.svg"
          width="20"
          height="20"
          quality={50}
          priority={true}
        />
      </div>
    </div>
    </>
  )
}

const mapStateToProps = ({}) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(search)
