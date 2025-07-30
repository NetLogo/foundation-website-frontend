import ReactMarkdown from 'react-markdown';
import "./AboutSection.css";

interface AboutItem {
  body: string;
}

interface AboutSectionProps {
  AboutData: AboutItem[];
}


const AboutSection = ({ AboutData }: AboutSectionProps) => {
    return(
        <div className='text-start pt-4 px-5'>
            {AboutData.length === 0 ? (
                <p>No about content available.</p>
            ) : (
                AboutData.map((entry, index) => (
                    <ReactMarkdown key={index}>
                        {entry.body}
                    </ReactMarkdown>
            ))
            )
            }
        </div>
    );
};

export { AboutSection };