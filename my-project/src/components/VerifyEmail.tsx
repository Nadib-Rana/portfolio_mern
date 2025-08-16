import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AuthLayout from "./AuthLayout";

export default function VerifyEmail() {
  const { token } = useParams<{ token: string }>();
  const [status, setStatus] = useState<"loading"|"success"|"error">("loading");
  const [msg, setMsg] = useState("Verifying your email…");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/verify/${token}`);
        setStatus("success");
        setMsg(res.data || "Email verified successfully!");
      } catch (err: any) {
        setStatus("error");
        setMsg(err?.response?.data || "Verification failed");
      }
    })();
  }, [token]);

  return (
    <AuthLayout title="Email verification">
      <div className={status === "success" ? "banner-success" : status === "error" ? "banner-error" : "banner"}>
        {msg}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3">
        <Link to="/login" className="btn-primary">Go to Login</Link>
        <Link to="/signup" className="btn-ghost">Back to Signup</Link>
      </div>
    </AuthLayout>
  );
}
