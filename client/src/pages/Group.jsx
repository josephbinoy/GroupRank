import { Link, useParams } from "react-router";
import { Box, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Lists from "../components/Lists";

export default function Groups() {
    const { id } = useParams();
    return (
        <div>
        <Navbar />
        <Box p={4}>
            <h1>Group {id}</h1>
        </Box>
        <Lists />
        <Link to="/newlist">
            <Button colorScheme="blue">Add List</Button>
        </Link>
        </div>
    );
}