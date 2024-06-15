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
        <br /><br />
        {/* icon from https://heroicons.com/outline */}
        <svg width="5%" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <p1>total likes: {likes}</p1>
        <button onClick={handleClick}>Send love</button>
    </div>
);
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
