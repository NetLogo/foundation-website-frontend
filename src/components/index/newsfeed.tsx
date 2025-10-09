import { Section } from "../shared/section";
import ReactMarkdown from 'react-markdown';
import "./styles/news.css";
import { useState } from "react";


interface NewsItem {
    id: number;
    title: string;
    date: string;
    body: string;
}

interface NewsSectionProps {
    NewsData: NewsItem[];
}

const Newsfeed = ({ NewsData }: NewsSectionProps) => {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };
    return (
        <div className="container-fluid text-start font-inter px-3 custom-lg-padding" style={{ backgroundColor: "white" }} id="news-and-social">
            <h1 className="fw-bold display-5" style={{ color: "#555770" }}>News and Social Media</h1>

            <div className="row mt-4 pb-5">
                <div className="col-lg-6 pe-lg-4 pb-lg-0 pb-5">
                    <h2 className="fw-bold mb-3" style={{ color: "#555770" }}>Official News</h2>
                    <div className="news-scroll-col" >
                        {NewsData.slice(0, visibleCount).map((item) => {
                            const formattedDate = new Intl.DateTimeFormat("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            }).format(new Date(item.date));

                            return (
                                <div key={item.id} className="mb-3 p-3 border-bottom border-2 bg-white">
                                    <h4 className="fw-bold mb-1">{item.title}</h4>
                                    <h6 className="text-muted d-block mb-2">{formattedDate}</h6>
                                    <ReactMarkdown className="mb-0"
                                        components={{
                                            img: ({ node, ...props }) => (
                                                <div
                                                    className="pt-3"
                                                    style={{ textAlign: "center" }}>
                                                    <img
                                                        {...props}
                                                        style={{ maxHeight: "275px", width: "auto", maxWidth: "100%", display: "inline-block", }}
                                                    />
                                                </div>),
                                        }}
                                    >
                                        {item.body}
                                    </ReactMarkdown>
                                </div>
                            );
                        })}
                        {visibleCount < NewsData.length && (
                            <div className="text-center mt-3 py-3">
                                <button className="btn btn-primary fw-bold" onClick={handleLoadMore}>
                                    Load more news
                                </button>
                            </div>
                        )}
                    </div>
                </div>





                <div className="col-lg-6 pe-lg-4 pb-lg-0 pb-5">
                    <div className="mb-3" style={{ color: "#555770" }}>
                        <h2 className="fw-bold" style={{ display: "inline", marginRight: "0.5em", }}>
                            On <a href="https://bsky.app/profile/netlogo.bsky.social" target="blank" style={{ textDecoration: "none" }}>Bluesky</a>
                        </h2>
                        <h5 className="" style={{ display: "inline" }}>
                            (and <a href="https://x.com/netlogo" target="blank" style={{ textDecoration: "none" }}>on X</a>)
                        </h5>
                    </div>
                    <div className="news-scroll-col">
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