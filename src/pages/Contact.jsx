import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {

  const formRef = useRef(null);

  const [form, setForm ] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false);

  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]:e.target.value }) // storing the previous values and then updating the latest value of particular field
    console.log(e.target.name)
  };

  const handleFocus = () => setCurrentAnimation('walk');

  // This is the function which will be activated once you click outside the field
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'wizardsWeb',
        from_email: form.email,
        to_email: import.meta.env.VITE_APP_TO_EMAIL,
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({show: true, text: 'Message sent successfully', type: 'success'});
      
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name: '', email: '', message: ''});
      }, [3000])

    }).catch((error) => {
      setCurrentAnimation('idle')
      showAlert({show: true, text: 'I didn&apos;t receive your message', type: 'danger'});
      setIsLoading(false);
      console.log(error);
    })

  };


  return (
  <>
   <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>
      <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
        <label htmlFor="" className='text-black-500 font-semibold'>
          Name
          <input 
          type="text" 
          name='name' 
          className='input' 
          placeholder='wizardsWeb' 
          required value={form.name} 
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>

        <label htmlFor="" className='text-black-500 font-semibold'>
          Email
          <input 
          type="email" 
          name='email' 
          className='input' 
          placeholder='wizardsWeb@gmail.com' 
          required value={form.email} 
          onChange={handleChange} 
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>

        <label htmlFor="" className='text-black-500 font-semibold'>
          Your Message
          <textarea  
          name='message' 
          className='textarea'
          rows={4}
          placeholder='Let me know how can i help you ' 
          required value={form.message} 
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>

        <button className='btn' type='submit' onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading }>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

      </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
         camera={{
           position: [0, 0, 5],
           // Field of View
           fov: 75,
           near: 0.1,
           far: 1000,
          }}
          >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0 ]}
              scale={[0.6, 0.6, 0.6]}
              />
          </Suspense>
        </Canvas>
      </div>

   </section>
  </>
  )
}

export default Contact
