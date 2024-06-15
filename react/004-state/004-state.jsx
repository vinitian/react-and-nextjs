const app = document.getElementById('app');

function HomePage() {
    
    // array destructuring
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        console.log("love sent!");
        setLikes(likes + 1);
    }
    
    return (
    <div>
        <h1>nong muu sud yod</h1>
        <img alt="warukunaimon album art" width="30%" src="https://milgram.s3.amazonaws.com/uploads/public/636/a2b/b0d/636a2bb0d843b774772803.jpg"/>
        
        {/* <svg width="5%" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg> */}
        <br /><br />
        <p1>total likes: {likes}</p1>
        <button onClick={handleClick}>Send love</button>
    </div>
);
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
