import Link from "next/link";

const HomePage = () => {
  return (
    <main className="">
      Homepage
      <Link
        href={{
          pathname: "/[username]",
          query: { username: "delasim" },
        }}
      >
        Delasi Profile
      </Link>
    </main>
  );
};

export default HomePage;
