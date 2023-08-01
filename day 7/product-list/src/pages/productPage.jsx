import { useEffect, useState } from "react";
import { ProductList } from "../components/product";
import { Center, Flex } from "@chakra-ui/react";
import data from "../json/data.json";
import add50 from "../assets/icons8-plus.svg";

import { useDisclosure } from "@chakra-ui/react";
import { ModalInputProduct } from "../components/modal";
export const ProductListPage = ({ search }) => {
  const [products, setProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setProducts([...data.products]);
  }, []);
  return (
    <>
      <Center alignItems={"flex-start"} marginTop={"35px"}>
        <ProductList
          search={search} // untuk filter
          products={[...products]} // data
          setProducts={setProducts} // function untuk mengubah datanya
        />
        <Flex justifyContent={"right"} bgColor={"blue"}>
          <img
            src={add50}
            alt=""
            style={{
              position: "fixed",
              backgroundColor: "white",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              marginRight: "20px",
              marginTop: "20px",
            }}
            onClick={onOpen}
          />
        </Flex>
        <ModalInputProduct
          isOpen={isOpen}
          onClose={onClose}
          setProducts={setProducts}
          products={products}
        />
      </Center>
    </>
  );
};
