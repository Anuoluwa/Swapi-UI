import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { useGetPeople } from "../hooks/use-get-people";
import Person from './Person';
import Pagination from './pagination';
import Search from './search';
import NavLink from '../components/NavBar';
import Footer from '../components/Footer';


const PEOPLE_QUERY = gql`
  query {
    getPeople {
      data {
        name
        height
        mass
        gender
        home_world {
          name
          terrain
          population
          orbital_period
          rotation_period
          diameter
          climate
          gravity
          surface_water
        }
      }
      page {
        count
        next
        previous
      }
    }
  }
`;

const HomeListStyle = styled.div`
  display: grid;
  padding: 0 8rem;
  grid-template-columns: 1.5fr 1.5fr;
  grid-column-gap: 1.5rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 3rem 4rem;
  }
`;

const getQueryVariables = (personName: string, pageNum: number) => {
  const name = personName || "";
  const page = pageNum || 1;
  return { name, page };
};

function Home({ page } : any) {
  // const { data, loading, error } = useQuery(PEOPLE_QUERY);
  const { data, error, loading } = useGetPeople({
    variables: {
      filter: {
        page: Number(page) || 0,
      },
    },
  });

  return (
    <>
     <NavLink />
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <Search />
      <Pagination count={data?.getPeople?.page?.count || 0} page={page} />
      <HomeListStyle>
        {data?.getPeople?.data.map((person: any) => (
          <Person key={person.name} data={person} />
        ))}
      </HomeListStyle>
      <Pagination count={data?.getPeople?.page?.count || 0} page={page} />
      < Footer />
    </>
  );
}

export default Home;