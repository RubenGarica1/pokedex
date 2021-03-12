const axios = require('axios')
const data = require('./data.json')

async function init() {
  data.map(async i => {
    let response = await axios(i.url)
    let res = await response
    let {["dream_world"]: data} = res.data.sprites.other
    await set({
        id: res.data.id,
        name: res.data.name,
        image: data.front_default,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types.map(e=>e.type.name),
        shiny: [res.data.sprites.front_default, res.data.sprites.back_shiny],
        photo: [res.data.sprites.front_default, res.data.sprites.front_shiny]
      })
  })
}

async function set (item) {
  await axios("http://localhost:3000/pokemon",{
    method: 'post',
    data: {
      item
    }
  })
}

init()