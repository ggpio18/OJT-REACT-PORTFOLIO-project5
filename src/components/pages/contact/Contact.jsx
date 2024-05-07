import React, { useState } from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'

const Contact = () => {
    const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      setOutput((prevOutput) => [...prevOutput, { type: 'input', text: inputValue }]);
      // Here you can process the input, execute commands, etc.
      // For now, let's just simulate a success prompt.
      setOutput((prevOutput) => [...prevOutput, { type: 'output', text: 'Success!' }]);
      setInputValue('');
    }
  };
  return (
    <>
    <Header/>

<div className="relative flex items-top justify-center h-[40rem] bg-white dark:bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 dark:bg-primary2 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                Acme Inc, Street, State,
                                Postal Code
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +44 1234567890
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                piolo18aranza@gmail.com
                            </div>
                        </div>
                    </div>

                    <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-primary2 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-primary2 border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-primary2 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <button type="submit" className="md:w-32 mt-5 btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {/* try */}
    <div className="px-[30%] mb-5">
    <div className="bg-black text-white p-4 rounded-lg">
      <div className="flex items-center">
        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
      </div>
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <p className="text-white ml-2">ls</p>
      </div>
      <div className="ml-6">
        <p className="text-green-400">file1.txt  file2.txt  folder1</p>
      </div>
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <p className="text-white ml-2">cd folder1</p>
      </div>
      <div className="ml-6">
        <p className="text-green-400">Entering folder1...</p>
      </div>
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <p className="text-white ml-2">cat readme.txt</p>
      </div>
      <div className="ml-6">
        <p className="text-white">This is the content of readme.txt...</p>
      </div>
      {output.map((item, index) => (
        <div key={index} className={item.type === 'input' ? 'mt-2' : 'ml-6'}>
          <p className={item.type === 'input' ? 'text-green-400' : 'text-white'}>$</p>
          <p className={item.type === 'input' ? 'text-white ml-2' : ''}>{item.text}</p>
        </div>
      ))}
      <div className="mt-2">
        <p className="text-green-400">$</p>
        <input
          type="text"
          className="text-white ml-2 bg-transparent outline-none border-none focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
        />
      </div>
    </div>
    </div>

    <Footer/>
    </>
  )
}

export default Contact
