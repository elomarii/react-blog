import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { site } from "../globals";
import {
  faBarsProgress,
  faChessRook,
  faHome,
  faNewspaper,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const path = window.location.pathname;
  const tabs: string[] = ["BLOG", "PROJECTS", "WHOAMI"];
  const tabsIcons: IconDefinition[] = [
    faNewspaper,
    faBarsProgress,
    faChessRook,
  ];

  return (
    <aside
      aria-label="Sidebar"
      id="sidebar"
      className="d-flex flex-column align-items-end"
    >
      {/* Avatar picture */}
      <header className="profile-wrapper">
        <a href="/" id="avatar" className="rounded-circle">
          <img src={site.avatar} width="112" height="112" alt="avatar" />
        </a>
        <h1 className="site-title">
          <a href="/whoami">{site.name}</a>
        </h1>
        <p className="site-subtitle fst-italic mb-0">{site.description}</p>
      </header>

      {/* Site tabs */}
      <nav className="flex-column flex-grow-1 w-100 ps-0">
        <ul className="nav">
          <li className={path == "/" ? "nav-item active" : "nav-item"}>
            <a className="nav-link" aria-current="page" key="home" href="/">
              <FontAwesomeIcon className="fa-fw" icon={faHome} />
              <span>HOME</span>
            </a>
          </li>
          {tabs.map((tab, index) => {
            return (
              <li
                className={path == `/${tab}` ? "nav-item active" : "nav-item"}
              >
                <a
                  className="nav-link"
                  key={index}
                  href={`/${tab.toLowerCase()}`}
                >
                  <FontAwesomeIcon className="fa-fw" icon={tabsIcons[index]} />
                  <span>{tab}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default NavBar;
