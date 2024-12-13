import { Link } from "react-router";
import { Grid, GridItem } from "@chakra-ui/react";

const lists = [
  {
    id: 1,
    name: "List 1",
    description: "This is the first List.",
  },
  {
    id: 2,
    name: "List 2",
    description: "This is the second list.",
  },
  {
    id: 3,
    name: "List 3",
    description: "This is the third list.",
  },
]

export default function Lists() {
  return (
      <Grid templateColumns="repeat(3, 1fr)" gap={4} p={4}>
        {lists.map(list => (
          <GridItem key={list.id} bg="gray.100" p={4} borderRadius="md">
            <Link to={`/lists/${list.id}`}>
              <h2>{list.name}</h2>
              <p>{list.description}</p>
            </Link>
          </GridItem>
        ))}
      </Grid>
  );
}