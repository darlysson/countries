import { Button, Container, Flex, Grid, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import axios from 'axios';
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Country from '../components/country';
interface IData {
  data: [
    name: string
  ]
}

const Home: NextPage = () => {
  const [data, setData] = useState<IData>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://restcountries.com/v3.1/all');
      setData(result.data);
    }

    fetchData();
  }, [])

  return (
    <>
      <Container
        maxWidth="80rem"
        px={{ base: "4", md: "12" }}
        py={{ base: "6", md: "10" }}
      >
        <Flex
          alignItems={{ md: "center" }}
          justifyContent={{ md: "space-between" }}
          direction={{ base: "column", md: "row" }}
        >
          <InputGroup bg="white" boxShadow="base" border="none" borderColor="white" w={{ md: "35%" }} borderRadius="6" mb={{ base: 9, md: 0 }}>
            <InputLeftElement pointerEvents="none" pb="1" pt="3" pl="5">
              <AiOutlineSearch size="25" color="gray.100" />
            </InputLeftElement>
            <Input height="12" pl="16" type="text" placeholder="Search for a country..." />
          </InputGroup>

          <Menu>
            <MenuButton
              w={{ base: "65%", md: "20%" }}
              px={4}
              py={2}
              bg="white"
              boxShadow="base"
              transition="all 0.2s"
              borderRadius="6"
              height="12"
              id="menu-button-2"
              as={Button} rightIcon={<BiChevronDown />}
              _focus={{ boxShadow: "outline" }}
            >
              <Text mr="1" align="left" fontSize="14">
                Filter by Region
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem fontSize="14" fontWeight="500">Africa</MenuItem>
              <MenuItem fontSize="14" fontWeight="500">America</MenuItem>
              <MenuItem fontSize="14" fontWeight="500">Asia</MenuItem>
              <MenuItem fontSize="14" fontWeight="500">Europe</MenuItem>
              <MenuItem fontSize="14" fontWeight="500">Oceania</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>

      <Container as="main" px={{ base: "14", md: "12" }} pb="10" maxWidth="80rem">
        <Grid templateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap={16}>
          <Country />
          <Country />
          <Country />
          <Country />
          <Country />
        </Grid >
      </Container>
    </>
  )
}

export default Home
