import React from 'react';
import styles from '../../../styles/Contact.module.css';


interface IProps{
    icon:JSX.Element,
    title:string,
    info:string,
    className:string
}

const ContactInfo:React.FC<IProps> = ({icon, title, info, className}) => {
  return (
    <>
        <div className={className}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
                <p>{info}</p>
            </div>
        </div>
    </>
  )
}

export default ContactInfo