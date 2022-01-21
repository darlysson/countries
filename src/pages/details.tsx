import React from 'react'

import { Container, Button, Grid, Wrap, WrapItem, GridItem, Image, Heading, Flex, UnorderedList, ListItem, Text } from '@chakra-ui/react'
import { BiArrowBack } from "react-icons/bi"
const img = "https://images.unsplash.com/photo-1540827341250-3dba07798cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"

export default function Details() {
  return (
    <Container maxWidth="80rem" mb="4" px={{ base: "6", md: "12" }} py={{ base: "6", md: "10" }}>
      <Button leftIcon={<BiArrowBack />} bg="white" fontSize="14" px="10" boxShadow="md" >
        Backs
      </Button>

      <Grid display={{ base: "block", md: "grid" }} templateColumns="repeat(2, 1fr)" mt={20} gap={24} h="200px" alignItems="center">
        <GridItem mb={{ base: 8, md: 0 }}>
          <Image src={img} alt="USA flag" />
        </GridItem>
        <GridItem>
          <Heading mb="6" fontSize="24">United States of America</Heading>
          <Flex flexDirection={{ base: 'column', md: "row" }} justifyContent={{ md: "space-between" }}>
            <UnorderedList styleType="none" spacing="none" style={{ marginInlineStart: 0 }}>
              <ListItem >
                <Text display="flex" fontSize="14" fontWeight="500">Population: <Text fontWeight="400" as="span" ml="1">323.947.000</Text></Text>
              </ListItem>
              <ListItem mt="1.5">
                <Text display="flex" fontSize="14" fontWeight="500">Region: <Text fontWeight="400" as="span" ml="1">Americas</Text></Text>
              </ListItem>
              <ListItem mt="1.5">
                <Text display="flex" fontSize="14" fontWeight="500">Capital: <Text fontWeight="400" as="span" ml="1">Washington D.C</Text></Text>
              </ListItem>
              <ListItem mt="1.5">
                <Text display="flex" fontSize="14" fontWeight="500">Capital: <Text fontWeight="400" as="span" ml="1">Washington D.C</Text></Text>
              </ListItem>
              <ListItem mt="1.5">
                <Text display="flex" fontSize="14" fontWeight="500">Capital: <Text fontWeight="400" as="span" ml="1">Washington D.C</Text></Text>
              </ListItem>
            </UnorderedList>

            <UnorderedList mt={{ base: 10, md: 0 }} styleType="none" spacing="none" style={{ marginInlineStart: 0 }}>
              <ListItem >
                <Text display="flex" fontSize="14" fontWeight="500">Population: <Text fontWeight="400" as="span" ml="1">323.947.000</Text></Text>
              </ListItem>
              <ListItem mt="1.5">
                <Text display="flex" fontSize="14" fontWeight="500">Region: <Text fontWeight="400" as="span" ml="1">Americas</Text></Text>
              </ListItem>
              <ListItem mt="1.5">
                <Text display="flex" fontSize="14" fontWeight="500">Capital: <Text fontWeight="400" as="span" ml="1">Washington D.C</Text></Text>
              </ListItem>
            </UnorderedList>
          </Flex>

          <Flex mt={{ base: 10, md: 16 }} pb={{ base: 8, md: 0 }} alignItems="baseline" flexDirection={{ base: "column", md: "row" }}>
            <Text fontSize="14" fontWeight="500" mr="2">Border Countries:</Text>
            <Wrap spacing="3" mt={{ base: 4 }}>
              <WrapItem>
                <Button bg="white" size="sm" fontSize="14" px="5" boxShadow="md" >
                  France
                </Button>
              </WrapItem>
              <WrapItem>
                <Button bg="white" size="sm" fontSize="14" px="5" boxShadow="md" >
                  Germany
                </Button>
              </WrapItem>
              <WrapItem>
                <Button bg="white" size="sm" fontSize="14" px="5" boxShadow="md" >
                  Netherlands
                </Button>
              </WrapItem>
            </Wrap>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}
