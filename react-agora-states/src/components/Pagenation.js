import React from "react";

export const Pagenation = (props) => {
  const { discussions } = props;
  const pageIndex = 0;
  const itemsPerPage = 10;
  const pageSize = 5;

  //   const loadPageNav = () => {
  //     paginationWrapper.textContent = "";
  //     for (let i = 0; i < discussions.length / itemsPerPage; i++) {
  //       let span = document.createElement("span");
  //       span.textContent = i + 1;

  //       span.addEventListener("click", (e) => {
  //         pageIndex = e.target.textContent - 1;
  //         loadItems();
  //       });

  //       if (i === pageIndex) {
  //         span.style.fontSize = "1.7rem";
  //       }

  //       paginationWrapper.append(span);
  //     }
  //   };

  //   const loadItems = () => {
  //     ul.textContent = "";

  //     for (
  //       let i = pageIndex * itemsPerPage;
  //       i < pageIndex * itemsPerPage + itemsPerPage;
  //       i++
  //     ) {
  //       if (discussions.length - 1 < i) break;
  //       ul.append(convertToDiscussion(agoraStatesDiscussions[i]));
  //     }
  //     loadPageNav();
  //   };

  return (
    <nav
      className={`pagination__container${
        discussions.length <= 0 ? " hide" : ""
      }`}
    >
      <div className="pagination--wrapper">
        {/* <ul>
          <li>
            <button>
              <span>{`<`}</span>
            </button>
          </li>
          <li>
            <button>
              <span>1</span>
            </button>
          </li>
          <li>
            <button>
              <span>2</span>
            </button>
          </li>
          <li>
            <button>
              <span>3</span>
            </button>
          </li>
          <li>
            <button>
              <span>4</span>
            </button>
          </li>
          <li>
            <button>
              <span>5</span>
            </button>
          </li>
          <li>
            <button>
              <span>{`>`}</span>
            </button>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};
