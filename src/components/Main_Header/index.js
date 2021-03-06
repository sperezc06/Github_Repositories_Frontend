import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./style.css";

function MainHeader({ fav }) {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  const logout = () => {
    history.push("/");
    localStorage.setItem("auth-token", "");
    dispatch({
      type: "log-user",
      token: undefined,
      user: undefined,
    });
  };

  useEffect(() => {
    if (!user) history.push("/");
  }, []);
  return (
    <>
      {fav ? (
        <div className="header-container">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="header-container-left">
              <img
                className="header-logo"
                src="https://okhosting.com/resources/uploads/2018/06/github-logo.png"
                alt=""
              />
            </div>
          </Link>
          <div className="header__right">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAAA8CAMAAAC6sxMiAAAB41BMVEUAAAAA//8A/4AAqqoAv4AAzJkr1aok25Ig358cxo4azJkX0aIV1ZUU2J0S25IRzJkgz58e0pYc1Zwb15Qa2ZkYzp4X0ZcW05sV1ZUU1pkU2J0c0Jcb0Zsa05Ua1ZkYz5cX0ZsX0pYW05kV1ZwV1pga0ZYa0pkZ05sW05sW1JgZ0psX1Zka1ZkX0poa05kZ1JoY0poY0pgX0pgZ05oZ05gY1ZgX1JoZ05gZ05oY1JgY1JkY0poY0pgX05gX1JkZ1JoZ05gY1JoX05gX05oZ1JkY05oY1JkZ1JgY05kY1JkX05kY1JoY05kY05gY05kX0pkX0pkY05oY05kY05oX1JkX0pgY05kY05kY0pkY05oY05kX05kZ0poY05kY05kY05gY1JkY0poY05kX05gX05kY05kY05gY05oY0pkY0pgY05kY05oY05kY1JgY05kX05oZ05kY05gY05oY05kY05kY05kY05kY0pkX05kZ05kY05kY0pkY05kY05kY05kY1JkZ05kY05kY05kY1JkY05kY05kY0pkY05kY05kY05kY05kY05kY05kY05kY05kX05kY05kY05kY05kY05kY05kY05kY05kY05kY05kY05kY05kY05kY05kY05kY05kY05n///+LTL9dAAAAn3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eICEiIyQlJygpLi8zNzxERkdJSk9RUlRYXF1eX2BhY2RlaGptb3B0dnx/goSIiouMjo+SlpeZmp2eoKGio6anqKmqq62ur7Kztbe9vr/AwsPExcfJysvMzc7P0NPU1tfY2drb3t/h4+Xm5+jp6uzt7u/w8fLz9PX29/j5+vv8/f7aAsgZAAAAAWJLR0SgXtO+oAAAA0VJREFUaN7tmvtXEkEUxwdBFDFTHqGWlahZWWpPo7Ky7GGWZA97KJRlLyuxh6WViqBlpUL2UESdfzWFnRkWZpZ9ec52zt6fhu/d7/DZPcPOnXsAUHMBdCSRSA7thJtDAtqJEh1JR9KRdKR0JPQKjcicM8L551Ino9/0F0p2I5C6Of897SCVhxL2UJl2kIDdG14Ke21AQ0i0ydRB+lm5Hg7LRiAZShIxLREJxcyry3WZ2b8pjj+8mXkUFKQ9bf2RjAJJGtJ6fDyaoxJSfYBas0lHgjBQrQaSw8coI+UgwWiDciT3OFQTCS4dUIpU9R2qiwR/1ypD2jwB1UaCQ0ZFSF1QfSR4SglS3ao6SIvfUicay1GA9JT3Y5GLFNhvApbDI0TYJx+pgtxbyFMEChsH5SDdMiaE/D6stMtHasXDgeLEdcYb0pHemTilYBJJz+Uj9aLRrJOz5byRjHQIS2eQNCUfKYhGbdhXLxlpE5aqCYhspChZjygsiyKRFrjLYgYs2ZB1ASyjbIoDzbwihISMsJYYZ3hGNlIIecuxVIOkH6TqcuCsE1dYQki4IGnARnOMZ2Qj4eqhGUsXkPQWDKGhB2ePI+mzENIoGnmx8SDfyEbCv81gIXoMX5HUBe6j4XgBl7XihesXQsJlya9t6CEN8Y1spEY8zTNrssh5gZUjwIPHj5NM1idYaRJCaiH1YPItkHcnzchGypvHl042b7dUnJsi20sRsMXxp+CJUlB2kmzvcZsQkguvbzjbWm1wNg2nGwUO4O3M3fH6WtbHzPYAwT2ul2n0Z+0JFM+yirgda9mdi4xszC2MtHuFNW1V9jZFC8N7MZHtYGSvAGEkcI1h9IrpnNylWl8md+Hcfmp2wJwNqWCYftAwi0HKp51sPti5rINWsE44QDYkUB6mGMMucf0lS+YiHiwhh/7M5xTYArIjgbL3GcbXpWJbXobz8zxn/JIpJWvuiPFX9tVcIAYJWDv5azzemSehC1d6k3xt7HZNWtbtI++neE8lsw2QUX7s7SNQy492SWwM2k/7PkVWp0e6PS5K1nbMPxaF0VF/k02gM0GpiLaefTA6tzoffNjs1NunOpKOpCPpSIqQjNoJu/4/gf8X6R/aYvZEL7cHpwAAAABJRU5ErkJggg=="
              alt=""
            />
            <p>React Js Exercise for Hello Build</p>
          </div>
          <div className="header-container-right">
            <h3 className="header-logout" onClick={logout}>
              Sign out
            </h3>
          </div>
        </div>
      ) : (
        <div className="header-container">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div className="header-container-left">
              <img
                className="header-logo"
                src="https://okhosting.com/resources/uploads/2018/06/github-logo.png"
                alt=""
              />
            </div>
          </Link>
          <div className="header__right">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <p>React Js Exercise for Hello Build</p>
          </div>
          <div className="header-container-right">
            <Link to="/home/github/fav" style={{ textDecoration: "none" }}>
              <div className="header-profile">
                <h4 className="header-profile-title">
                  Hey {user?.username} check your favorites repositories
                </h4>
              </div>
            </Link>
            <h3 className="header-logout" onClick={logout}>
              Sign out
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default MainHeader;
