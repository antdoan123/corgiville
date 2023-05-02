import React, { useRef, useState } from 'react';

const Contact = () => {

  const [sent, setSent] = useState(false)

  const senderNameRef = useRef<HTMLInputElement>(null);
  const senderEmailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailBody = {
      subject: `Corgiville - Message from ${senderNameRef.current?.value} (${senderEmailRef.current?.value})`,
      text: messageRef.current?.value
    };
    try {
      const res = await fetch('api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailBody)
      });
      console.log('The email sent!');
      setSent(true);
    }
    catch (error) {
      console.log('The email did not send...');
    }
  }

  return (
    <div className='h-screen w-full bg-cbg bg-fit bg-center'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="pb-4 flex items-center justify-center pt-10 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Contact Us
        </h2>

        <div>
          <form className='max-w-[600px] m-auto pt-4 text-white' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-2 '>
              <input className='bg-transparent border border-white p-3 ' ref={senderNameRef} type="text" placeholder='Name' />
              <input className='bg-transparent  border border-white p-3 ' ref={senderEmailRef} type="email" placeholder='Email' />
            </div>
            <div className='mt-4'>
            <textarea className='bg-transparent border border-white p-3 w-full ' ref={messageRef} cols={30} rows={10} placeholder="Message" />

            </div>
            <a href="mailto:antdoan123@gmail.com" target="_blank" rel="noreferrer">
              <button className='hover:shadow-lg hover:shadow-blue-200 rounded-md p-3 w-full mt-2  bg-white text-black font-bold text-xl'>Submit</button>
            </a>
            <p className={`pt-1 text-green-200 italic ${sent ? '' : 'hidden'}`}>{"Sent! We'll get back to you shortly."}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
