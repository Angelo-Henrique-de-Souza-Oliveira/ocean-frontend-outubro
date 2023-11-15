import { useEffect, useState } from 'react'
import Card from '../Card'
export default function Home() {

  const [items, setItems]= useState([])

  async function carregarDadosapi(){
    
  const apiurl = "https://rickandmortyapi.com/api/character/";

  const response = await fetch(apiurl)

  const body = await response.json()
  
    const results = body.results.map(function (element){
      return {
        name: element.name,
        image: element.image,
        tags:[
          `Status : ${element.status}`,
          `Species: ${element.species}`,
          `Origin: ${element.origin.name}`,
          `Episodes: ${element.episode.length}`
        ]
      }
    })

  setItems(results)
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