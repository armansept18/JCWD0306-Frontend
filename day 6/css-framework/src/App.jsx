import logo from "./logo.svg";
import "./App.css";
import ChakraExample from "./components/chakra";
import TailwindExample from "./components/tailwind";
import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  // setTimeout(() => setNumber(number + 1), 10);
  return (
    <>
      {/* <TailwindExample /> */}
      {/* <ChakraExample /> */}

      <Center height={"100vh"} fontSize={"58px"} fontWeight={"bold"}>
        {number}
      </Center>
    </>
  );
}

export default App;
