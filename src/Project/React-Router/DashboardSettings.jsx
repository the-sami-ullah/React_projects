// components/DashboardSettings.jsx
import { useParams } from "react-router-dom";

export default function DashboardSettings() {
  
  const params = useParams();
  return <p>⚙️ Settings page. (No params here, but hook is safe to use!)</p>;
}
