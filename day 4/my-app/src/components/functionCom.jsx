const Heading1 = ({ name, age }) => {
  return (
    <div>
      <h1>ini Heading 1</h1>
      <h2>{name + " " + age}</h2>
    </div>
  );
};

const Heading2 = () => {
  return (
    <div>
      <h1>ini heading 2</h1>
    </div>
  );
};

// export default Heading1;
export { Heading1, Heading2 };
