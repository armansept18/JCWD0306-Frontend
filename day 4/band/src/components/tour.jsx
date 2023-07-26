import NewYorkIMG from "../assets/newyork.jpg";

const Tour = () => {
  const tickets = [
    {
      img: "../assets/newyork.jpg",
      title: "New York",
      date: "Fri 27 Nov 2016",
    },
    {
      img: "../assets/paris.jpg",
      title: "Paris",
      date: "Sat 28 Nov 2016",
    },
    {
      img: "../assets/sanfran.jpg",
      title: "San Francisco",
      date: "Sun 29 Nov 2016",
    },
  ];

  return (
    <center style={{ height: "100%" }} id="tour">
      <div style={{ backgroundColor: "black", maxWidth: "2000px" }}>
        <div className="content">
          <h2 style={{ color: "white" }}>TOUR DATES</h2>
          <p style={{ color: "#818181" }}>Remember to book your tickets!</p>
          <div className="tour">
            <div style={{ display: "flex" }}>
              September
              <span className="sold">Sold Out</span>
            </div>
          </div>
          <div className="tour">
            <div style={{ display: "flex" }}>
              October
              <span className="sold">Sold Out</span>
            </div>
          </div>
          <div className="tour">
            <div style={{ display: "flex" }}>November</div>
            <div className="ticket">3</div>
          </div>

          <div className="ticket-list">
            {tickets.map((ticket) => (
              <TicketCard {...ticket} />
            ))}
          </div>
        </div>
      </div>
    </center>
  );
};

const TicketCard = ({ img, title, date }) => {
  return (
    <div className="ticket-card">
      <img src={require(img)} alt="" />
      <div className="ticket-desc">
        <p>
          <b>{title}</b>
        </p>
        <p style={{ opacity: 0.6 }}>{date}</p>
        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
        <button>Buy Tickets</button>
      </div>
    </div>
  );
};

export default Tour;
