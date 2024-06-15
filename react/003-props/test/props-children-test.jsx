function Card({children}) {
    return (
      <div className="card">
        <p>楠 夢羽</p>
        {children}
      </div>
    );
  }
  
  function Avatar() {
      return(
          <img alt="warukunaimon album art" width="30%" src="https://milgram.s3.amazonaws.com/uploads/public/636/a2b/b0d/636a2bb0d843b774772803.jpg"/>
  
      );
  }

function Profile() {
    return (
      <Card>
        <Avatar />
      </Card>
    );
  }


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<Profile />);