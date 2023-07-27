const Navbar = () => {
  return (
    <center style={{ backgroundColor: "black" }}>
      <div
        style={{
          width: "100vw",
          maxWidth: "1440px",
        }}
      >
        <a
          style={{
            marginRight: "25px",
            color: "white",
            textDecoration: "none",
          }}
          href="/home"
        >
          HOME
        </a>
        <a
          href="/profile"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "25px",
          }}
        >
          PROFILE
        </a>
        <a
          href="/ridwan"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "25px",
          }}
        >
          RIDWAN
        </a>

        <a
          href="/ridwan?age=17"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "25px",
          }}
        >
          RIDWAN WITH AGE
        </a>
        <a
          href="/andre"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "25px",
          }}
        >
          ANDRE
        </a>

        <a
          href="/hooks/example"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "25px",
          }}
        >
          HOOKS
        </a>

        <a
          href="/lcm"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "25px",
          }}
        >
          LIFE CYCLE METHOD
        </a>
      </div>
    </center>
  );
};

export default Navbar;
