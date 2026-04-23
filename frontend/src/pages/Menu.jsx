import TopBar from "../components/TopBar";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const buttons = [
     { teksti: "Tehtävät", polku: "/tehtavat" },
    { teksti: "Kurssit", polku: "/kurssit" },
    { teksti: "Profiili", polku: "/profiili" },
    { teksti: "Asetukset", polku: "/asetukset" }
  ];

  const handleClick = (polku) => {
    console.log("Siirry:", polku);

    // toimii heti kun sivut lisätään
    //navigate(polku);
  };

  return (
    <div className="dashboard-container">
    <TopBar user={user} />

    <div className="button-container">
       {buttons.map((btn, i) => (
          <button
            key={i}
            className="menu-button"
            onClick={() => handleClick(btn.polku)}
          >
            {btn.teksti}
            
          </button>
        ))}
    </div>
  </div>
  );
}