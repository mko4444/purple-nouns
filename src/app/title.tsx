export function Title() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        marginBottom: 32,
      }}
    >
      <span
        style={{
          position: "relative",
          textTransform: "uppercase",
          fontSize: "48px",
          letterSpacing: "0.05em",
          height: 44,
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            filter: "saturate(5) brightness(1.1)",
          }}
        />
        <span style={{ color: "#57A4FF" }}>P</span>
        <span style={{ color: "#FF21FF" }}>U</span>
        <span style={{ color: "#EABCFF" }}>R</span>
        <span style={{ color: "#9D59FF" }}>P</span>
        <span style={{ color: "#FE51FF" }}>L</span>
        <span style={{ color: "#822AFF" }}>E</span>
      </span>
      <span
        style={{
          height: 50,
          position: "relative",
          fontSize: "58px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        <span style={{ color: "#EABCFF" }}>N</span>
        <span style={{ color: "#9D59FF" }}>O</span>
        <span style={{ color: "#822AFF" }}>U</span>
        <span style={{ color: "#FE51FF" }}>N</span>
        <span style={{ color: "#7C68FF" }}>S</span>
      </span>
    </div>
  );
}
