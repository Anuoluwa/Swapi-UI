import { FunctionComponent } from 'react'
// import Head from 'next/head';
// import Link from 'next/link';
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

interface PaginationProps {
  page: number
  count: number
}

const PaginationStyle = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 14px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 2px solid rgba(255, 255, 255, 1);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
    & > * {
      padding: 12px 14px;
  }
  }
`;


const Pagination: FunctionComponent<PaginationProps> = ({ page, count }) => {
  const perPage = 10;
  const pageCount: number = Math.ceil(count / perPage);
  return (
    <PaginationStyle>
      <div>
        <title>
          Swapi - Page {page} of {pageCount}
        </title>
      </div>
      <Link to={`/?page=${page - 1}`}>
      <button disabled={page <= 1} >← Prev</button>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link to={`/?page=${page + 1}`}>
      <button disabled={page === pageCount} >Next → </button>
        {/* */}
      </Link>
    </PaginationStyle>
  );
}

export default Pagination;

// https://swapi.dev/api/people/?page=2