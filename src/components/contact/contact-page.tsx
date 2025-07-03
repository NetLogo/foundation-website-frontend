import React from "react";
import ReactMarkdown from 'react-markdown';
import "./ContactSection.css";



interface ContactItem {
  heading: string;
  body: string;
}

interface ContactSectionProps {
  ContactData: ContactItem[];
}


const ContactSection = ({ ContactData }: ContactSectionProps) => {
    return (
        <div className="contacts-container">
            <h1>Contact</h1>

            
            {ContactData.length === 0 ? (
                <p>No contact info available.</p>
            ) : (
                <div className="contact-list">
                {ContactData.map((item, index) => (
                    <div key={index} className="contact-item">
                        <h2>{item.heading}</h2>
                        <ReactMarkdown className="contact-content">
                            {item.body}
                        </ReactMarkdown>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
};

export { ContactSection };