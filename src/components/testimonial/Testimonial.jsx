import React from 'react'
import './testimonial.css'
import rec1 from '../../assets/hod.jpeg';
import rec2 from '../../assets/Ebenezer.jpeg';
import rec3 from '../../assets/Lawrance.jpeg';
import rec4 from '../../assets/tmb.jpeg';
import rec5 from '../../assets/Mubarak.jpeg';
import rec6 from '../../assets/yahaya.jpeg';
import rec from '../../assets/REC.pdf';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        img: rec1,
        name:"Dr. Faruk Musa Aliyu",
        title: "HOD Computer Science Dept - FUBK",
        recommendation: rec,
        contact: "mailto:fmaliyu@gmail.com"
    },
    {
        id: 2,
        img: rec2,
        name:"Ebenezer Ifezulike",
        title: "Mentor/Software Engineer @Decagon",
        recommendation: "https://www.linkedin.com/in/yusufanka/details/recommendations/?detailScreenTabIndex=2",
        contact: "https://www.linkedin.com/in/ebenezer-ifezulike-34320015a/"
    },
    {
        id: 3,
        img: rec3,
        name:"Lawrence Mandong",
        title: "Software Engineer @Decagon",
        recommendation: "https://www.linkedin.com/in/yusufanka/details/recommendations/?detailScreenTabIndex=2",
        contact: "https://www.linkedin.com/in/lawrence-mandong/"
    },
    {
        id: 4,
        img: rec4,
        name:"Umar Moh'd Tambari",
        title: "C.E.O TMB Express Ltd",
        recommendation: "https://www.linkedin.com/in/yusufanka/details/recommendations/?detailScreenTabIndex=2",
        contact: "https://www.linkedin.com/in/umar-muhammad-tambari-0256731a4/"
    },
    {
        id: 5,
        img: rec5,
        name:"Mubarak Abubakar Bunza",
        title: "Software Developer @Decagon",
        recommendation: "https://www.linkedin.com/in/yusufanka/details/recommendations/?detailScreenTabIndex=2",
        contact: "https://www.linkedin.com/in/mubarak-bunza/"
    },
    {
        id: 6,
        img: rec6,
        name:"Yahaya Suleiman ",
        title: "Fullstack Developer | Cloud Engineer",
        recommendation: "https://www.linkedin.com/recs/received/?senderId=yahayasm",
        contact: "https://www.linkedin.com/in/yahayasm/"
    }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
        <h2>Recommendations from People</h2>
        <Swiper className='container testimonials__container'
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            
        >
            {
                data.map(({id, title, name, img, recommendation, contact}) => {
                    return (
                        <SwiperSlide key={id} className='testimonial'>
                            <div className='testimonial__avatar'>
                                <img src={img} alt="" />
                            </div>
                            <h3 className='client__name'>{name}</h3>
                            <h5>{title}</h5>
                            <div className='client__review'>
                                <div className='portfolio__item-cta'>
                                <a href={recommendation} className='btn' target='_blank'>Review Recommendation:</a>
                                <a href={contact} className='btn' target='_blank'>Contact</a>
                                
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Testimonial;