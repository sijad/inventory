import Container from "components/Container";

export default function Footer(): JSX.Element {
  return (
    <Container>
      <footer className="mt-5 text-center text-gray-400">
        <p>
          <svg
            className="inline w-5"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="coded"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          {" by "}
          <a
            href="https://github.com/sijad/"
            target="_blank"
            className="text-gray-500"
            rel="noopener noreferrer"
          >
            {"@sijad"}
          </a>
        </p>
      </footer>
    </Container>
  );
}
