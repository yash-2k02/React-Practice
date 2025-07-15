import { jwtVerify } from "jose";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KEY = import.meta.env.VITE_KEY;
const SECRET = new TextEncoder().encode(KEY);

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return navigate("/");

      try {
        const { payload } = await jwtVerify(token, SECRET);
        setUser(payload);
      } catch (err) {
        console.error("Invalid or expired token");
        localStorage.removeItem("authToken");
        navigate("/");
      }
    };

    checkToken();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>WELCOME, {user.name}</p>
      <p>Role: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
