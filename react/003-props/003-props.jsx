const app = document.getElementById('app');

// แบบที่ 1
// function Header(props) {
//     console.log(props) // Object { title: "myProp" }
//     return(<h1>nong muu narak ti sud</h1>);
// }

// แบบที่ 2: uses object destructuring
function Header({title}) {
    console.log(title) // myProp
    return(<h1>{title}</h1>); //must have {} so it means the variable
}

function NameList() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    return (
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    );
}
function HomePage() {
    return (
    <div>
        <Header title="myProp"/>
        <Header title="Kusunoki Muu"/>
        <NameList />
        <p>nong muu sud yod</p>
        <img alt="warukunaimon album art" width="50%" src="https://milgram.s3.amazonaws.com/uploads/public/636/a2b/b0d/636a2bb0d843b774772803.jpg"/>
    </div>
);
}
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
