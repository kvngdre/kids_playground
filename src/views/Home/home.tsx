import KJLogo from '../../assets/images/kids_playground_logo.svg';

function Home() {
  return (
    <div
      className="gradient_line"
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <img src={KJLogo} style={{ width: '500px' }} alt="logo" />
        <p className="h2 color_primary_400 text-center">My Galleries</p>
      </div>
    </div>
  );
}

export default Home;
