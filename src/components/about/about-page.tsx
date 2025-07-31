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
        <div className='text-start pt-4 px-5 ms-auto me-auto w-75'>
            {AboutData.length === 0 ? (
                <p>No about content available.</p>
            ) : (
                AboutData.map((entry, index) => (
                    <ReactMarkdown 
                        key={index}
                        components={{
                        img: ({ node, ...props }) => (
                            <div className="text-center pt-3">
                            <img
                                {...props}
                                className='rounded'
                                alt={props.alt || ''}
                            />
                            </div>
                        ),
                        }}>
                        {entry.body}
                    </ReactMarkdown>
            ))
            )
            }
        </div>
    );
};

export { AboutSection };