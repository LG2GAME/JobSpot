import { api } from "@api/api";
import { useAuthStore } from "@store/authStore";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await api.post("/logout.php");
    } catch (error) {
      console.error("Unknown server error.", error);
    } finally {
      useAuthStore.getState().logout();
      navigate("/");
    }
  };

  return { logoutUser };
};
