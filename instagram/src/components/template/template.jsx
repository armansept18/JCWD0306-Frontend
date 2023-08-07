import { Footer } from "../navigation/footer";
import { Navbar } from "../navigation/navbar";

export const NavTemplate = ({ children }) => {
  return (
    <>
      <div className="flex justify-center w-screen">
        <div className="mobile">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export const Template = ({ children }) => {
  return (
    <>
      <div className="flex justify-center w-screen">
        <div className="mobile">{children}</div>
      </div>
    </>
  );
};
