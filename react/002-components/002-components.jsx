const app = document.getElementById('app');

function Header() {
    return(<h1>nong muu narak ti sud</h1>); //จริงๆ ไม่ต้องใส่ () ก็ได้
}

function HomePage() {
    return (
    <div>
        <Header />
        <p>sud yod</p>
        <img alt="warukunaimon album art" width="50%" src="https://milgram.s3.amazonaws.com/uploads/public/636/a2b/b0d/636a2bb0d843b774772803.jpg"/>
    </div>
);
}
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
