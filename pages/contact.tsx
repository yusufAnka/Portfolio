import styles from "./../styles/Contact.module.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../app/Components/Loader/Loader";
import ContactInfo from "../app/Components/ContactInfo/ContactInfo";
import Input from "../app/Components/Input/Input";
import Button from "../app/Components/Button/Button";
import Title from "../app/Components/Title/Title";
import { useRouter } from "next/router";

export type InputChangeAll = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, subject, message } = formData;
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleChange = (e: InputChangeAll) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContact = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || name?.length < 5)
      return toast.error("Name At least 5 charters");
    if (!email) return toast.error("Email is require");
    if (!subject || subject?.length < 25)
      return toast.error("Subject At least 25 charters");
    if (!message || message?.length < 50)
      return toast.error("Message At least 50 charters");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_PROXY_URL}/contact/me`,
        formData
      );
      toast.success("Thanks for message me. I will soon connect with you.");
      router.push("/")
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <section className={styles.contact} id="contact">
        <div className="container">
          <Title text="Get in Touch" />
          <div className={styles.wrapper}>
            <div className={styles.location}>
              <ContactInfo
                icon={<MdLocationOn />}
                title="Location"
                info="Pabna, Bangladesh"
                className={styles.myInfo}
              />
              <ContactInfo
                icon={<MdEmail />}
                title="Email"
                info="islamrajulearn.dev@gmail.com"
                className={styles.myInfo}
              />
              <ContactInfo
                icon={<MdEmail />}
                title="Web Email"
                info="info@devecoded.com"
                className={styles.myInfo}
              />
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.7137258651992!2d89.28734082923243!3d23.98706622431292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11eb2b35095a40b2!2zMjPCsDU5JzEzLjQiTiA4OcKwMTcnMTYuNCJF!5e1!3m2!1sen!2sbd!4v1655361479589!5m2!1sen!2sbd"
                  width={"100%"}
                  height={450}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
            <div className={styles.contactForm}>
              <form onSubmit={handleContact}>
                <div className={styles.from_control}>
                  <label htmlFor="name">Your Name</label>
                  <Input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.from_control}>
                  <label htmlFor="email">Your Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                </div>
                <div className={styles.from_control}>
                  <label htmlFor="subject">Your Subject</label>
                  <Input
                    type="text"
                    value={subject}
                    onChange={handleChange}
                    name="subject"
                    id="subject"
                    placeholder="Your subject"
                  />
                </div>
                <div className={styles.from_control}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    value={message}
                    onChange={handleChange}
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="app_btn">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
