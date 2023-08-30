import { useEffect, useState } from 'react';
import { ProductList } from '../components/product';
import { Center, Flex } from '@chakra-ui/react';
// import data from "../json/data.json";
import add50 from '../assets/icons8-plus.svg';

import { useDisclosure } from '@chakra-ui/react';
import { ModalInputProduct } from '../components/modal';
import { api } from '../api/axios';
export const ProductListPage = ({ search }) => {
 const [products, setProducts] = useState([]);
 const { isOpen, onOpen, onClose } = useDisclosure();

 // const fetchProducts = async () => {
 //   try {
 //     const res = await api.get("/products");
 //     setProducts([...res.data]);
 //   } catch (err) {
 //     console.log(err);
 //   }
 // };

 const fetchProducts = async () => {
  try {
   const res = await api.get('/products/name', {
    params: { product_name: search }
   });

   // localhost:2000/products?name=search
   // like berbeda dengan equal
   //sepatu , sepatu kuda
   //api.get("/products?name=" + search)
   //products?name_like=""
   setProducts([...res.data]);
  } catch (err) {
   console.log(err);
  }
 };

 useEffect(() => {
  // setFiltered(
  //   products.filter((prod) =>
  //     prod.name.toLowerCase().includes(search.toLowerCase())
  //   )
  // );
  fetchProducts();
 }, [search]);
 // search =""
 //search ="y"

 // useEffect(() => {
 //   fetchProducts();
 // }, []);
 return (
  <>
   <Center alignItems={'flex-start'} marginTop={'35px'}>
    <ProductList
     // search={search} // untuk filter
     products={[...products]} // data
     fetchProducts={fetchProducts}
     // setProducts={setProducts} // function untuk mengubah datanya
    />
    <Flex justifyContent={'right'} bgColor={'blue'}>
     <img
      src={add50}
      alt=""
      style={{
       position: 'fixed',
       backgroundColor: 'white',
       borderRadius: '50%',
       objectFit: 'cover',
       cursor: 'pointer',
       marginRight: '20px',
       marginTop: '20px'
      }}
      onClick={onOpen}
     />
    </Flex>
    <ModalInputProduct
     isOpen={isOpen}
     onClose={onClose}
     fetchProducts={fetchProducts}
    />
   </Center>
  </>
 );
};
