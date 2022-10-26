import Link from "next/link";
import { ClientAPIContent } from "../components/client-api-content";
import { ServerAPIContent } from "../components/server-api-content";
import { ServerContentWithUse } from "../components/server-content-with-use";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">This is the home page!</h1>

      <section>
        <h2 className="text-2xl font-bold">Server API with async</h2>
        <p className="text-sm text-gray-600">
          This should become static on build
        </p>
        {/**
         * This component breaks TS because it is not expecting an async component yet
         * @ts-ignore */}
        <ServerAPIContent />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Server API with use()</h2>
        <p className="text-sm text-gray-600">
          As far as I can tell from the documentation, use() should only be for
          frontend, but this somehow still works? It has the exact same result
          as using async server component as far as I can tell (aside from the
          lack of TS error).
        </p>
        <ServerContentWithUse />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Client fetching with use()</h2>
        <p className="text-sm text-gray-600">
          This apparently also becomes static on build?
        </p>
        <p className="text-sm text-gray-600">
          It currently does not work with actual fetch() though, which will
          cause infinite network calls
        </p>
        <ClientAPIContent />
      </section>

      <section>
        <h2 className="text-2xl font-bold">Server fetch on request</h2>

        <p className="text-sm text-gray-600">
          This is also a server component like the first section, but the fetch
          request is forced to be called per request instead of only on build,
          making it the old gSSP effectively.
        </p>
        <Link href="/ssr" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Client side fetching with RQ</h2>
        <p className="text-sm text-gray-600">
          This is (actual) client side fetching with react query. The layout of
          it is also a client component since it needs context.
        </p>
        <Link
          href="/client-fetch"
          className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Client side fetching with tRPC</h2>
        <p className="text-sm text-gray-600">
          This is also an (actual) client side fetching with react query. The
          layout of it is also a client component since it needs context.
        </p>
        <p className="text-sm text-gray-600">
          It is set up with the{" "}
          <Link
            href="https://trpc.io/docs/v10/react"
            className="text-blue-600 hover:text-blue-800"
            target="_blank">
            Usage with React
          </Link>{" "}
          section in tRPC v10 docs instead of{" "}
          <Link
            href="https://trpc.io/docs/v10/nextjs"
            className="text-blue-600 hover:text-blue-800"
            target="_blank">
            Usage with Next.js
          </Link>
        </p>
        <Link href="/trpc" className="text-blue-600 hover:text-blue-800">
          Go to page
        </Link>
      </section>
    </div>
  );
}
