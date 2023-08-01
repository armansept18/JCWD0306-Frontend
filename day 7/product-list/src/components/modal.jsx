import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Center,
} from "@chakra-ui/react";
import defaultImage from "../assets/default-image.jpg";
import { useEffect, useState } from "react";
export const ModalInputProduct = ({
  isOpen,
  onClose,
  setProducts,
  product,
  products = [],
}) => {
  const [data, setData] = useState(
    product
      ? product
      : {
          url: "",
          name: "",
          price: 0,
        }
  );
  useEffect(() => {
    setData(product);
  }, [product]);

  const inputHandler = (e) => {
    if (e.target.id == "price")
      if (isNaN(e.target.value)) return setData({ ...data, [e.target.id]: 0 });
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const clear = () => {
    setData({
      url: "",
      name: "",
      price: 0,
    });
  };

  const submit = () => {
    try {
      //add karena product kosong
      if (!product) {
        if (data.url && data.name && data.price)
          setProducts([
            ...products,
            { ...data, id: products[products.length - 1].id + 1 },
          ]);
        else alert("lengkapi input");
        clear();
      } else {
        const idx = products.findIndex((prod) => prod.id == product.id); //0
        const tmp = [...products];
        tmp[idx] = data;
        setProducts(tmp);
      }
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const remove = () => {
    const idx = products.findIndex((prod) => prod.id == product.id);
    const tmp = [...products];
    tmp.splice(idx, 1);
    setProducts(tmp);
    clear();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add/Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center flexDir="column" gap={"15px"}>
            <img
              src={data?.url ? data?.url : defaultImage}
              width={"201px"}
              height={"143px"}
              alt="isi dengan gambar"
            ></img>
            <Input
              id="url"
              placeholder="Image URL"
              maxW="300px"
              defaultValue={data?.url}
              onChange={inputHandler}
            ></Input>
            <Input
              id="name"
              placeholder="Product Name"
              maxW="300px"
              defaultValue={data?.name}
              onChange={inputHandler}
            ></Input>
            <Input
              id="price"
              placeholder="Product Price"
              maxW="300px"
              defaultValue={data?.price}
              value={data?.price}
              onChange={inputHandler}
            ></Input>
          </Center>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={submit}>
            Submit
          </Button>
          {product ? (
            <Button colorScheme="red" mr={3} onClick={remove}>
              Delete
            </Button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
