export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between px-4 py-6 mx-auto text-sm text-white lg:container md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://taylorbrynat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Sebastian Mellen
          </a>{" "}
          and{" "}
          <a
            href="https://taylorbrynat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            The Daring LLC
          </a>
        </li>

        <li>
          <a
            href="https://github.com/oddstronaut/next-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
