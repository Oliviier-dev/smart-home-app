import React, { useState } from 'react';
import Decorator from '../assets/decorator 1.svg'
import Vector from '../assets/Vector 1.svg'
import { FaPlus, FaMinus } from 'react-icons/fa';

function FAQ() {
    const faqs = [
        {
            question: "What is your return policy?",
            answertitle: "Return Policy Details",
            answer: "Our asked six point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
        },
        {
            question: "How can I track my order?",
            answertitle: "Order Tracking Information",
            answer: "Man its upon him call mile. An pasture he himself believe ferrars besides cottage."
        },
        {
            question: "What payment methods do you accept?",
            answertitle: "Accepted Payment Methods",
            answer: "A quick brown fox jumps over the lazy dog. Thus it is only a matter of time."
        },
        {
            question: "Do you ship internationally?",
            answertitle: "International Shipping Information",
            answer: "The sun sets on the horizon, and the stars begin to whisper secrets."
        },
        {
            question: "What should I do if I received a damaged item?",
            answertitle: "Damaged Item Instructions",
            answer: "In the midst of chaos, clarity arises like a flower from the mud."
        }
    ];
    

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative flex items-center justify-center flex-col py-6 text-black">
            <img
                src={Decorator}
                alt="vector"
                className="absolute hidden lg:block left-20 transform -translate-x-1/2 -z-10"
                style={{ top: 'calc(50% - 4rem)', maxWidth: '100vw' }}
            />
            <img
                src={Vector}
                alt="vector"
                className="absolute hidden lg:block -right-72 transform -translate-x-1/2 -z-10"
                style={{ top: 'calc(-40% + 0rem)', maxWidth: '100vw' }}
            />
            <h1 className='font-bold text-5xl mt-8 mb-4'>FAQ'S</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="my-4 w-full max-w-sm px-4 md:max-w-2xl">
                    <div 
                        className="flex items-center bg-gray-200 px-8 py-6 rounded-lg cursor-pointer transition-shadow hover:shadow-md"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="text-lg font-normal mr-2">{openIndex === index ? <FaPlus /> : <FaPlus />}</span>
                        <span className="flex-grow">{faq.question}</span>
                    </div>
                    {openIndex === index && (
                        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md mt-4">
                            <div className="flex items-center">
                                <span className="text-red-600 mr-2"><FaMinus /></span>
                                <h2 className="font-bold">{faq.answertitle}</h2>
                            </div>
                            <div className='flex items-center'>
                                <span className="text-white mr-2"><FaMinus /></span>
                                <p className="mt-2">{faq.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQ;
