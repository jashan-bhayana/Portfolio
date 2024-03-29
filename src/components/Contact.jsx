import React , {useState,useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from "@emailjs/browser"

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../highorderComponet'
import { slideIn } from '../utils/motion'
import { F } from 'maath/dist/index-0332b2ed.esm'



const Contact = () => {
  const formRef = useRef()
  const [loading,setLoading] = useState()
  const [form,setForm] = useState({
name:'',
email:'',
message:''

  });

  const handleChange = (e) => {
     const {name , value} = e.target;

     setForm({...form, [name]:value})
  }

  const handleSubmit = (e) =>{
   e.preventDefault();
   setLoading(true)
   emailjs.send("service_pmc5igh",
   "template_bxndkbl",
   {
    from_name: form.name,
    to_name: 'Jashan',
    from_email: form.email,
    to_email: 'jashanbhayana5@gmail.com',
   },
    "0xAlmHpuqItVaMvuq"
    )
    .then(() =>{
      setLoading(false)
      alert("Thank You.I will get back to you shortly")

      setForm({
        name:'',
        email:'',
        message:''
      }) 
    },(error)=>{
   setLoading(false)
   console.log(error)
   alert('Something is wrong')
    }
      
    )
  }
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
    <motion.div variants={slideIn('left','tween',0.2,1)}
    className='flex-0.75 bg-tertiary p-8 rounded-2xl'>
    <p className={styles.sectionSubText}>Get In Touch</p>
    <h3 className={styles.sectionHeadText}>Contact.</h3>

    <form
    ref={formRef}
    onSubmit={handleSubmit}
    className='mt-12 flex flex-col gap-8'>

    <label className='flex flex-col'>
    <span className='text-white font-medium mb-4'>
    Your Name
    </span>
    <input type="text"
    name='name'
    value={form.name}
    onChange={handleChange}
    placeholder='Your name' 
    className='bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
    </label>

    <label className='flex flex-col'>
    <span className='text-white font-medium mb-4'>
    Email
    </span>
    <input type="email"
    name='email'
    value={form.email}
    onChange={handleChange}
    placeholder='Your email' 
    className='bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
    </label>

    <label className='flex flex-col'>
    <span className='text-white font-medium mb-4'>
    Message
    </span>
    <textarea 
    rows="7"
   
    name='message'
    value={form.message}
    onChange={handleChange}
    placeholder='Your Message' 
    className='bg-black-200 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
    </label>
    
    <button className='bg-purple-500 py-3 font-bold px-8 rounded-xl text-white w-fit shadow-md shadow-primary' type='submit'>
    {loading ? 'Sending...': "send"}</button>
    </form>
    </motion.div>

    <motion.div  variants={slideIn('right','tween',0.2,1)}
    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    
    >
    <EarthCanvas />
    </motion.div>
    </div>
  )
}

export default SectionWrapper (Contact,"contact")