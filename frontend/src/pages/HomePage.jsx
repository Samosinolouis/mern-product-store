import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW="container.lg" py={12}>
      <VStack spacing={8}>
        <Flex align="center" justify="center">
          <Text
            fontSize={"30"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, orange.400,red.400)"}
            bgClip={"text"}
            textAlign={"center"}
          >
            Current Products
          </Text>
          <Text fontSize={"30"} ml={2} display={"inline"}>
            🚀
          </Text>
        </Flex>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize={"x1"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"gray.500"}
          >
            No Products found 😞{". "}
            <Link to={"/create"}>
              <Text
                as={"span"}
                color={"red.500"}
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
