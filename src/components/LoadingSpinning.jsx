const LoadingSpinning = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border m-5"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinning;
