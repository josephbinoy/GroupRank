import Navbar from '../components/Navbar';
import { Box, Button, VStack, Grid, GridItem } from '@chakra-ui/react';

export default function NewList() {
    return (
        <div>
            <Navbar />
            <Box p={4}>
                <h1>Add List</h1>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
                    <VStack spacing={4}>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Youtube Link: 
                            <input type="text" name="url" />
                        </label>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kq2BCYAKDNc?si=PThjih2gmVZ8hIkp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <Button colorScheme="blue" type="submit">Add Item</Button>
                    </VStack>
                </GridItem>
                <GridItem>
                    <VStack spacing={4}>
                        <h2>Items</h2>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </VStack>
                </GridItem>
            </Grid>
            <Button colorScheme="blue">Save List</Button>
        </div>
    );
}