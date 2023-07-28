import { Button, Container, Flex } from "@chakra-ui/react";

const ChakraExample = () => {
  return (
    <Flex
      h="48px"
      bgColor="red"
      width={"100vw"}
      color="white"
      justifyContent={"center"}
    >
      <Flex
        className=" bg-slate-300 lg:bg-slate-600"
        maxW={"1280px"}
        w="100vw"
        alignItems={"center"}
        fontSize={"20px"}
        fontWeight={"medium"}
        textTransform={"uppercase"}
      >
        Home
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ok{" "}
        </button>
        <Button borderRadius={"50%"} colorScheme="cyan" variant={"outline"}>
          ok
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChakraExample;
