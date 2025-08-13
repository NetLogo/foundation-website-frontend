import { Section } from "../shared/section";
import ReactMarkdown from 'react-markdown';



const Newsfeed = () => {
    return (
        <div className="container-fluid text-start font-inter" style={{backgroundColor:"white", paddingLeft: "10rem"}}>
            <h1 className="fw-bold" style={{fontSize:"3rem"}}>News</h1>
            <p style={{fontSize:"18px"}}>Learn about latest news and upcoming events in NetLogo community.</p>

            <script type="module" src="https://cdn.jsdelivr.net/npm/bsky-embed/dist/bsky-embed.es.js" async></script>

            <bsky-embed
                username="netlogo.bsky.social"
                search="netlogo.bsky.social"
                mode=" "
                limit="3"
                link-target="_blank"
                custom-styles="img { max-height: 275px; }"
                load-more="true"
            >
            </bsky-embed>

        </div>
    );
};

export { Newsfeed };