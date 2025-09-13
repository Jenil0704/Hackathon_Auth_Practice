import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function SendOTP() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // get email from register page if passed
  const registeredEmail = location.state?.email;

  const handleSendOTP = async () => {
    const targetEmail = registeredEmail || email;
    await axios.post("http://localhost:5000/api/auth/send-otp", { email: targetEmail });
    alert("OTP sent to your email");
    navigate("/verify-otp", { state: { email: targetEmail } });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Send OTP</h1>
      {!registeredEmail && (
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 block"
        />
      )}
      <button onClick={handleSendOTP} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send OTP
      </button>
    </div>
  );
}
