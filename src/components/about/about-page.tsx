import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import "./AboutSection.css";

interface AboutItem {
    body: string;
}

interface AboutSectionProps {
    AboutData: AboutItem;
}

const AboutSection = ({ AboutData }: AboutSectionProps) => {
    return (
        <div className='text-start pt-4 px-5 ms-auto me-auto w-75'>

            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
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
                {AboutData.body}
            </ReactMarkdown>

        </div>
    );
};

export { AboutSection };