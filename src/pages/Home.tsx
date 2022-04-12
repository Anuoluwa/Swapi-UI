import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { useGetPeople } from "../hooks/use-get-people";
import Person from './Person';
import Pagination from './pagination';
import CustomTable from "../components/customTable";
import { Box, Text, Flex, Button, Input } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

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

const PeopleListStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
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
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <Pagination count={data?.getPeople?.page?.count || 0} page={page} />
      <PeopleListStyle>
        {data?.getPeople?.data.map((person: any) => (
          <Person key={person.name} data={person} />
        ))}
      </PeopleListStyle>
      <Pagination count={data?.getPeople?.page?.count || 0} page={page} />
    </>
  );
}

export default Home;