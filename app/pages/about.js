import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">What is GettingBetter?</h2>

          <p>
            GettingBetter is a simple tool that gives you the basic building
            blocks you need to build a better life.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">
            Why is it called GettingBetter?
          </h2>
          <p>GettingBetter is inspired by the Beatles song Getting Better.</p>
        </section>
      </div>

      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}
