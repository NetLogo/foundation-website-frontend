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
        <div className="container py-5 text-start font-inter">
            <h1 className="mb-4 fw-bold">Contact</h1>

            
            {ContactData.length === 0 ? (
                <p>No contact info available.</p>
            ) : (
                <div className="row">
                {ContactData.map((item, index) => (
                    <div key={index} className="col-12">
                        <h3 className="fw-medium mb-3">{item.heading}</h3>
                        <ReactMarkdown className="ps-5 lh-lg">
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