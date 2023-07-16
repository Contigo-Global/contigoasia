export default function Footer() {
  return (
    <footer className="footer ">
      &copy; {new Date().getFullYear()} | contigoasia.com | Images from{" "}
      <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
        Unsplash
      </a>
    </footer>
  );
}
