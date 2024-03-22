import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
          {error.status}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {error.statusText}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">{error.data}</p>
      </div>
    </main>
  );
}
