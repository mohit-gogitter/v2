const Footer = () => {
  return (
    <div>
      <footer className="footer py-4 self-end container mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Mohit Singh. All rights reserved.
        </p>
        {/* <a href="#top" className="text-accent hover:underline">
            Back to top
          </a> */}
      </footer>
    </div>
  );
};
export default Footer;
