import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'
function App() {
  const item1 = {
    name: "Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tags:["Status: vivo","Espécie:Humana","Origem: Terra C-137"]

  }
  const item2 = {
    name: "Morty Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    tags:["Status: vivo","Espécie:Humana","Origem: Terra C-137"]
  }
  const item3 = {
    name: "Summer Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    tags:["Status: vivo","Espécie:Humana","Origem: Terra C-137"]
  }
 // const items = [item1,item2,item3]

  const [items, setItems]= useState([])

  async function carregarDadosapi(){
    
  const apiurl = "https://rickandmortyapi.com/api/character/";

  const response = await fetch(apiurl)

  const body = await response.json()
  console.log(body);

  setItems(body.results)
  }
  useEffect(function (){
    carregarDadosapi()
  }, [])

  return (
    <>
    <div className='cards'>
    {items.map(function(element){
      return <Card item={element}/>
    })}
    </div>
      </>
  )
}

export default App