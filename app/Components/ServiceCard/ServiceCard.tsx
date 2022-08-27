import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

interface IProps{
    img:string,
    title:string,
    desc:string,
    color:string
}

const ServiceCard:React.FC<IProps> = ({img, title, desc, color}) => {
  return (
    <>
        <div className={styles.serviceCard} style={{
            backgroundColor:color
        }}>
            <Image src={img} width={100} height={100} alt="Razu Islam" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </>
  )
}

export default ServiceCard