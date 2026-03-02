function UserCard({ name, email }) {
  // ทำ initials
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // รวมค่า charCode ของทุกตัวอักษรในชื่อ
  const totalCode = name
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const group = totalCode % 3;

  let bgColor;

  switch (group) {
    case 0:
      bgColor = "#1e40af"; // น้ำเงิน
      break;
    case 1:
      bgColor = "#16a34a"; // เขียว
      break;
    case 2:
      bgColor = "#7c3aed"; // ม่วง
      break;
    default:
      bgColor = "#1e40af";
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: bgColor,
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>

      <div>
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>
          {name}
        </div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>
          {email}
        </div>
      </div>
    </div>
  );
}

export default UserCard;