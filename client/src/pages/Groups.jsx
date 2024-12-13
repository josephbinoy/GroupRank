import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";

const groups = [
  {
    id: 1,
    name: "Group 1",
    description: "This is the first group.",
  },
  {
    id: 2,
    name: "Group 2",
    description: "This is the second group.",
  },
  {
    id: 3,
    name: "Group 3",
    description: "This is the third group.",
  },
]

export default function Groups() {
  return (
    <div>
      <Navbar />
      <Box p={4}>
        <h1>Your Groups</h1>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} p={4}>
        {groups.map(group => (
          <GridItem key={group.id} bg="gray.100" p={4} borderRadius="md">
            <Link to={`/groups/${group.id}`}>
              <h2>{group.name}</h2>
              <p>{group.description}</p>
            </Link>
          </GridItem>
        ))}
      </Grid>
      <Button colorScheme="blue">Add Group</Button>
    </div>
  );
}