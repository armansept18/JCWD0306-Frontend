import MemberImg from "../assets/member.jpg";

const BandMembers = () => {
  const members = ["Ridwan", "Andre", "Arif"];
  return (
    <div className="content" id="band">
      <h2>THE BAND</h2>
      <p>
        <i style={{ opacity: 0.6 }}>We love music</i>
      </p>
      <p className="desc">
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* <!-- member --> */}
      <div className="member-list">
        {members.map((member) => (
          <Member name={member} />
        ))}
      </div>
    </div>
  );
};

const Member = ({ name }) => {
  return (
    <div className="member">
      <p>{name}</p>
      <img src={MemberImg} alt="" />
    </div>
  );
};

export default BandMembers;
