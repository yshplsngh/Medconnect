import React,{useState} from 'react'
import './style.css'
export default function FAQComponent({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="faq-container">
            <div className={`faq-bar ${isOpen ? 'open' : ''}`} onClick={toggleAnswer}>
                {question}
            </div>
            {isOpen && (
                <div className="faq-answer">
                    {answer}
                </div>
            )}
        </div>
    )
}
