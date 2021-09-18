import Head from "next/head";
import Footer from "../components/footer";
// import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
  // const { session, loading } = useSession();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{}}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex flex-1 flex-col items-center justify-center w-full px-20 text-center bg-hero bg text-white"
        style={{
          "background-image":
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4) ,rgba(0, 0, 0, 0.8)), url(/hero-bg.jpg)",
        }}
      >
        {/* {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )} */}
        <h1 className="text-5xl font-bold max-w-xl">
          Unlimited films, TV programmes and more.
        </h1>
        <h2 className="text-2xl text-white my-4">
          Watch anywhere. Cancel at any time.
        </h2>
        <p className="text-lg text-white pb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex min-w-0">
          <input
            type="email"
            placeholder="Email address"
            className="bg-white h-[60px] p-4 min-w-[450px]"
          />
          <button className="flex items-center bg-netflix-red text-white text-2xl font-medium-semibold px-7">
            <span className="py-2">Get Started</span>
            <span className="pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                className="w-5 my-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
