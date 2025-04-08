import React, { FC, ReactElement, useEffect } from "react";
import { IPagination } from "../types/Pagination.type";

const PaginationComponent = ({
  currentPage,
  itemsCount,
  itemsPerPage,
  alwaysShown,
  setCurrentPage,
}: IPagination): ReactElement<FC> => {
  let isPageNumberOutOfRange: boolean;
  const pagesCount: number = Math.ceil(itemsCount / itemsPerPage);
  const isPaginationShown: boolean = alwaysShown ? true : pagesCount > 1;
  const isCurrentPageFirst: boolean = currentPage === 1;
  const isCurrentPageLast: boolean = currentPage === pagesCount;

  const changePage = (number: number): void => {
    if (currentPage === number) return;
    setCurrentPage(number);
  };

  const onPageNumberClick = (pageNumber: number) => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    changePage(currentPage - 1);
  };

  const onNextPageClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    changePage(currentPage + 1);
  };

  const setLastPageAsCurrent = (): void => {
    if (currentPage > pagesCount) setCurrentPage(pagesCount);
  };

  const pageNumbers: (JSX.Element | null)[] = [...new Array(pagesCount)].map(
    (_, index: number) => {
      const pageNumber = index + 1;
      const isPageNumberFirst = pageNumber === 1;
      const isPageNumberLast = pageNumber === pagesCount;
      const isCurrentPageWithinTwoPageNumbers =
        Math.abs(pageNumber - currentPage) <= 2;

      if (
        isPageNumberFirst ||
        isPageNumberLast ||
        isCurrentPageWithinTwoPageNumbers
      ) {
        isPageNumberOutOfRange = false;
        return (
          <div key={pageNumber} onClick={() => onPageNumberClick(pageNumber)}>
            {pageNumber}
          </div>
        );
      }

      if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        return <div key={pageNumber} className="muted" />;
      }

      return null;
    }
  );

  useEffect(setLastPageAsCurrent, [pagesCount, currentPage, setCurrentPage]);

  return (
    <>
      {isPaginationShown && (
        <div className="justify-content-center">
          <div className="rounded-0">{"Prev"}</div>

          {pageNumbers}

          <div className="rounded-0">{"Next"}</div>
        </div>
      )}
    </>
  );
};

export default PaginationComponent;
