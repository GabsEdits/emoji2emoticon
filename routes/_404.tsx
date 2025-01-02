import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className="p-20 flex flex-col items-center justify-center">
        <img src="https://http.cat/404" alt="404 - Page not found" />
        <p>Deal with it 😎</p>
      </div>
    </>
  );
}
