// life cycle method

import { useEffect, useState } from "react";

const Lcm = () => {
  const [sepedas, setSepedas] = useState([]);
  const [total, setTotal] = useState(sepedas.length);

  //   useEffect(() => {
  //     return () => {
  //       alert("test");
  //       console.log("Test");
  //     };
  //   }, []);

  //componentDidMount
  useEffect(() => {
    //yang terjadi pada saat useEffect berhasil ditrigger`
    alert("hello");
    setSepedas([
      ...sepedas,
      "https://trexsporting.com/images/products/11-KbmXViHodZ.jpg",
    ]);

    // setTotal(sepedas.length);
    //sepedas.length masih 0 karena setSepeda() membutuhkan
    //waktu untuk merubah isi array sepedas
  }, []);

  //componentDidUpdate
  useEffect(() => {
    setTotal(sepedas.length);
    console.log("hello");
    // setSepedas([...sepedas, "test"]);
  }, [sepedas]);

  return (
    <center style={{ paddingTop: "20px" }}>
      <button
        onClick={() => {
          setSepedas([
            ...sepedas,
            "https://trexsporting.com/images/products/11-KbmXViHodZ.jpg",
          ]);
        }}
      >
        <h2>add</h2>
      </button>
      {total % 2 == 0 ? <Display total={total} /> : null}
      {sepedas.map((sepeda, index) => (
        <div key={index}>
          <img
            src={sepeda}
            alt=""
            width={"400px"}
            height={"400px"}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </center>
  );
};

const Display = ({ total }) => {
  //componentWillUnMount
  useEffect(
    () => () => {
      console.log("test");
      alert("selamat tinggal");
    },
    []
  );

  return (
    <div>
      <h1>TOTAL GAMBAR : {total}</h1>
    </div>
  );
};

export default Lcm;
