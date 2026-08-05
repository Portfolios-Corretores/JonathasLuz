function PageAtmosphere() {
  return (
    <div
      className="page-atmosphere pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="atmosphere-orb atmosphere-orb--a" />
      <div className="atmosphere-orb atmosphere-orb--b" />
      <div className="atmosphere-orb atmosphere-orb--c" />
      <div className="atmosphere-waves" />
      <div className="atmosphere-grain" />
    </div>
  );
}

export default PageAtmosphere;
