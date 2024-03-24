import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo image" />
        <span>SV-ADMIN</span>
      </div>

      <div className="icons">
        <img src="/search.svg" alt="search image" className="icon" />
        <img src="/app.svg" alt="app image" className="icon" />
        <img src="/expand.svg" alt="expand image" className="icon" />

        <div className="notification">
          <img src="/notifications.svg" alt="notification image" />
          <span>1</span>
        </div>

        <div className="user">
          <img
            src="https://yt3.ggpht.com/8-NWuZo3OB4ctR_LYmMJYiXJxYFTuQpoWTuLOXx4xZ0Wc57Rr7Q03kxvjE6RVOAPNYy7kQ6G=s88-c-k-c0x00ffffff-no-rj"
            alt="search image"
          />
          <span>Sunil</span>
        </div>

        <img src="/setting.svg" alt="setting image" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
