import { Button } from "@components/common";
import { useLogout } from "@hooks/useLogout";

const Account = () => {
  const { logoutUser } = useLogout();

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div>
      <h3>Account</h3>
      <Button onClick={handleLogout} theme="border">
        Wyloguj się
      </Button>
    </div>
  );
};

export default Account;
