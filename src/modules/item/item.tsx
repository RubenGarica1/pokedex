import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from '../../components/Modal'
import Login from './../../components/Login'
import Wraper from "./../../components/wraper";
import PokemonItem from "../../components/pokemonItem";
import Search from "../../components/search";
export const item = (props: { user: String; slug: String; item: Object }) => {
  const [search, SetSearch] = useState("");
  const [modal, setModal] = useState(false);
  const handleSearch = () => {
    console.log(search);
  };
  return (
    <>
      <Modal open={modal} modalFunction={setModal}>
        <Login setModal={setModal} />
      </Modal>
      <Wraper user={props.user}  login={setModal}>
        <Search
          back={true}
          placeholder="Search"
          handleSearch={handleSearch}
          inputText={search}
          inputSet={SetSearch}
        />
        <PokemonItem item={props.item} />
      </Wraper>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(item);
