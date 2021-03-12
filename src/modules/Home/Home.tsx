import React, { useState } from "react";
import { connect } from "react-redux";
import Search from "../../components/search";
import ListItems from "../../components/listItems";
import Wraper from '../../components/wraper'
import Modal from '../../components/Modal'
import Login from './../../components/Login'
export const Home = ({pokemons,user}: any) => {
  const [search, SetSearch] = useState("");
  const [modal, setModal] = useState(false);
  const handleSearch = () => {
    console.log(search);
  };
  console.log(pokemons)
  return (
    <>
      <Modal open={modal} modalFunction={setModal}>
        <Login setModal={setModal}/>
      </Modal>
      <Wraper user={user} login={setModal}>
        <Search
          placeholder="Search"
          handleSearch={handleSearch}
          inputText={search}
          inputSet={SetSearch}
        />
        <ListItems pokemons={pokemons} search={search}/>
      </Wraper>
    </>
  );
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
