import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full text-center text-mono text-sm text-muted-foreground py-2">
      Built by{" "}
      <Link
        href="https://pratikstemkar.in"
        className="underline"
        target="_blank"
      >
        pratikstemkar
      </Link>
      . Source Code available on{" "}
      <Link
        href="https://github.com/pratikstemkar/insight"
        className="underline"
        target="_blank"
      >
        GitHub
      </Link>
      .
    </footer>
  );
};

export default Footer;
