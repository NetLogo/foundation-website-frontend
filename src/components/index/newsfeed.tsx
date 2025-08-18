import { Section } from "../shared/section";
import ReactMarkdown from 'react-markdown';
import "./styles/news.css";


const Newsfeed = () => {
    return (
        <div className="container-fluid text-start font-inter" style={{ backgroundColor: "white", paddingLeft: "10rem", paddingRight: "10rem" }}>
            <h1 className="fw-bold" style={{ fontSize: "3rem" }}>News and Social Media</h1>

            <div className="row mt-4 pb-5">
                <div className="col-md-6 pe-4">
                    <h2 className="fw-bold mb-3">Official News</h2>
                    <p className="text-muted">Coming soon...</p>
                </div>





                <div className="col-md-6 ps-4">
                    <h2 className="fw-bold mb-3">On Bluesky (and on X)</h2>
                    <div className="x-bsky-col">
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
                </div>
            </div>
        </div>
    );
};

export { Newsfeed };