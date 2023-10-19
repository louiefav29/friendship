import "./style.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="border"></div>
        <Header />
        <Main />
      </div>
    </>
  );
}
const navigationButton = ["home", "best friends", "photos", "contacts"];
const name = ["Ricco Ardiente", "Nick ko", "Sabrina Mariel"];
const appTitle = "best friend company";
const headerTextPrimary = "happy friendship day!";
const headerParagraph =
  "There are friends, there is family, and then there are friends that become family.";

function Header() {
  return (
    <header className="header">
      <nav className="text-cap">
        <div className="logo-box">
          {/* <img src="happy.png" alt="" /> */}
          <h1>{appTitle}</h1>
        </div>

        {/* <ul>
          {navigationButton.map((nav) => (
            <li>{nav}</li>
          ))}
        </ul> */}
      </nav>
      <div className="header-box">
        <img src="Friends.jpg" alt="" />
        <div className="text-box">
          <h1 className="text-cap">{headerTextPrimary}</h1>
          <p>{headerParagraph}</p>
        </div>
      </div>
    </header>
  );
}
function Main() {
  return (
    <main className="main">
      <section>
        <div className="profile-photos">
          <div className="photo-box">
            <img src="Ricco.png"></img>
            {/* {name.map((name) => (
              <p>{name.length}</p>
            ))} */}
            <p>Ricco Ardiente</p>
          </div>
          <div className="photo-box">
            <img src="Nickko.png"></img>
            <p>Nick ko</p>
          </div>
          <div className="photo-box">
            <img src="Sabrina.png"></img>
            <p>Sabrina Mariel</p>
          </div>
          <div className="photo-box">
            <img src="Louie.png"></img>
            <p>Louie Charles</p>
          </div>
          <div className="photo-box">
            <img src="Neil.png"></img>
            <p>Neil</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
