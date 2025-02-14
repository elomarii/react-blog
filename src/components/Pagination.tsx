import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

interface Props {
  currentPage: number;
  pagesCount: number;
  setPage: Dispatch<SetStateAction<number>>;
}

function pagination({ currentPage, pagesCount, setPage }: Props) {
  return (
    <nav aria-label="Page Navigation">
      <ul
        className="pagination align-items-center mt-4 mb-0"
        style={{ display: pagesCount > 1 ? "" : "none" }}
      >
        <li
          key="prev"
          className={currentPage == 0 ? "page-item disabled" : "page-item"}
        >
          <a
            className="page-link"
            aria-label="previous-page"
            href="#"
            onClick={() => setPage(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
        {Array.from({ length: pagesCount }, (_, i) => (
          <li
            key={i}
            className={currentPage == i ? "page-item active" : "page-item"}
          >
            <a className="page-link" href="#" onClick={() => setPage(i)}>
              {i + 1}
            </a>
          </li>
        ))}
        <li key="counter" className="page-counter">
          {currentPage + 1 + "/" + pagesCount}
        </li>
        <li
          key="next"
          className={
            currentPage == pagesCount - 1 ? "page-item disabled" : "page-item"
          }
        >
          <a
            className="page-link"
            href="#"
            onClick={() => setPage(currentPage + 1)}
            aria-label="Next"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default pagination;
