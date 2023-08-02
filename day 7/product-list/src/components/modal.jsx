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
import { api } from "../api/axios";
export const ModalInputProduct = ({
  isOpen,
  onClose,
  // setProducts,
  // product,
  // products = [],
  fetchProducts,
  id,
}) => {
  // const [data, setData] = useState(
  //   product
  //     ? product
  //     : {
  //         url: "",
  //         name: "",
  //         price: 0,
  //       }
  // );
  const [data, setData] = useState({
    url: "",
    name: "",
    price: 0,
  });

  const fetchProductById = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setData({ ...res.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) fetchProductById();
  }, [isOpen]);

  const inputHandler = (e) => {
    if (e.target.id == "price") {
      const price = e.target.value.replace(/[,.]/g, "");
      if (isNaN(price)) return setData({ ...data, [e.target.id]: 0 });
      else {
        return setData({
          ...data,
          [e.target.id]: price,
        });
      }
    }
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

  // const submit = () => {
  //   try {
  //     //add karena product kosong
  //     if (!product) {
  //       if (data.url && data.name && data.price)
  //         setProducts([
  //           ...products,
  //           { ...data, id: products[products.length - 1].id + 1 },
  //         ]);
  //       else alert("lengkapi input");
  //       clear();
  //     } else {
  //       const idx = products.findIndex((prod) => prod.id == product.id); //0
  //       const tmp = [...products];
  //       tmp[idx] = data;
  //       setProducts(tmp);
  //     }
  //     onClose();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const remove = () => {
  //   const idx = products.findIndex((prod) => prod.id == product.id);
  //   const tmp = [...products];
  //   tmp.splice(idx, 1);
  //   setProducts(tmp);
  //   clear();
  //   onClose();
  // };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.patch(`/products/${id}`, data);
      } else {
        await api.post("/products", data);
        clear();
      }
      fetchProducts();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  const remove = async () => {
    try {
      await api.delete(`/products/${id}`);
      clear();
      fetchProducts();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add/Edit Product</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={submit}>
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
                required
                type="url"
              ></Input>
              <Input
                id="name"
                placeholder="Product Name"
                maxW="300px"
                defaultValue={data?.name}
                onChange={inputHandler}
                required
              ></Input>
              <Input
                id="price"
                placeholder="Product Price"
                maxW="300px"
                defaultValue={data?.price}
                value={data?.price}
                onChange={inputHandler}
                // type="number"
                required
              ></Input>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="green" mr={3}>
              Submit
            </Button>
            {id ? (
              <Button type="button" colorScheme="red" mr={3} onClick={remove}>
                Delete
              </Button>
            ) : null}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
