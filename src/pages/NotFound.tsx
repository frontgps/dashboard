import '@/styles/NotFound.scss';
export default function NotFound() {
  return (
    <div className="container">
      <div className="blue-bubble"></div>
      <div className="red-bubble"></div>
      <h1 className="error-code">404</h1>
      <h1 className="error-title">Page Not Found!</h1>
      <a href="/" className="home-link">
        Back To Home
      </a>
    </div>
  );
}
