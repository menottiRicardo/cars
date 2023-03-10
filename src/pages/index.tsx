import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import CarCard from "~/components/home/CarCard";
import NavBar from "~/components/NavBar";
import BottomTabs from "~/components/BottomTabs";

const Home: NextPage = () => {
  const { data: cars } = api.car.getAll.useQuery();

  console.log(cars);
  return (
    <>
      <Head>
        <title>Cars</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="layout-1 min-h-screen bg-base-100 pb-20">
        <div className="mt-4 grid gap-y-4">
          {cars &&
            cars.map((car) => (
              <CarCard
                key={car.id}
                year={car.year}
                price={car.price}
                kms={car.kms}
                images={car.images}
              />
            ))}
        </div>
      </div>
      <BottomTabs />
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
