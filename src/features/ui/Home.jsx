import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import Button from "./Button";
import { getUsername } from "../user/userSlice";

function Home() {
  const username = useSelector(getUsername);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold text-stone-700 md:text-2xl">
        The best pizza.
        <br />
        <span className=" text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {username}
        </Button>
      )}{" "}
    </div>
  );
}

export default Home;
