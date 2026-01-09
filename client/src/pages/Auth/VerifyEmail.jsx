import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { verifyEmail } from "../../api/authApi";

export default function VerifyEmail() {
  const { token } = useParams();

  useEffect(() => {
    verifyEmail(token);
  }, [token]);

  return <h2>Email verified. You can now login.</h2>;
}
