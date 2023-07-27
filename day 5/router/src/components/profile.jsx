import { useParams, useSearchParams } from "react-router-dom";

const Profile = () => {
  return (
    <center>
      <h1>THIS IS PROFILE</h1>
    </center>
  );
};

const UserProfile = () => {
  const { username } = useParams(); // { username}
  const [searchParams, setSearchParams] = useSearchParams();
  const age = searchParams.get("age");

  return (
    <center>
      <h1 style={{ textTransform: "uppercase" }}>
        THIS IS {username} {age ? "AGE " + age : null}
      </h1>
    </center>
  );
};

export { Profile, UserProfile };
