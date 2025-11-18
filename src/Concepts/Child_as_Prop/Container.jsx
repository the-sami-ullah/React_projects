export default function Container({ children }) {
  // Fixed parameter name
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px",
        marginLeft: "15px",
        borderRadius: "4px",
        backgroundColor: "lightgray",
        display: "grid",
        placeItems: "center", // Center horizontally

        // minHeight: "200px",
        //  // Need height for vertical centering to work
      }}
    >
      <h1></h1>
      {children} {/* Fixed: use children directly */}
    </div>
  );
}
