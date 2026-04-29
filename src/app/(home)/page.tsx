import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-6 py-16">
      <h1 className="text-3xl font-bold mb-3">mxkey docs</h1>
      <p className="text-fd-muted-foreground mb-6">
        Reference for the mxkey CLI and the bundled agent skill.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/docs"
          className="font-medium underline underline-offset-4"
        >
          Read the docs →
        </Link>
        <Link
          href="https://mxkey.space"
          className="font-medium text-fd-muted-foreground hover:text-fd-foreground"
        >
          mxkey.space
        </Link>
      </div>
    </div>
  );
}
