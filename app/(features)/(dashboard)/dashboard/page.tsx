import AdminDashboard from "./_pages/admindashboard";
import { ReactNode } from "react";
import UserDashboard from "./_pages/usersdashboard";

type Role = "admin" | "user";

const dashboards: Record<Role, ReactNode> = {
  admin: <AdminDashboard />,
  user: <UserDashboard />,
};

function getDashboard(role: Role) {
  return dashboards[role];
}

export default function Page() {
  // const { user } = useAuth();

  // const currentUserRole: Role = user?.role ?? "tenant";
  const currentUserRole: Role = "admin"; // later get from auth user

  return (
    <div className="flex min-h-full w-full flex-col">
      {getDashboard(currentUserRole)}
    </div>
  );
}
