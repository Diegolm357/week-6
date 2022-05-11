import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'
export default function Home({
  cars}) {
    async function agregar(){
      return 
let  cart = await prisma.car.create({
      data: {
        brand: 'Ford',
        model: 'Falcon',
      }
    })
    
  }



  return (
    <div className={styles.container}>
    <button onClick={agregar() }></button>
    <ul>
      {cars.map((car, ind)=>{return(
<li key={ind}>
  {car.brand}-
  {car.model}
</li>

      )})}
    </ul>
    
    </div>
  )
}
export async function getServerSideProps(){
let cars= await prisma.car.findMany()
cars=JSON.parse(JSON.stringify(cars))
console.log(cars)

const car = await prisma.car.create({
  data: {
	  brand: 'Ford',
	  model: 'Falcon',
  }
})


return{
 
props:{

  cars,
},

}


}