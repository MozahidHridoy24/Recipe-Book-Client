import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-100 text-orange-900 p-6 space-y-4 shadow">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/dashboard"
            end // Ensures this matches only exact /dashboard
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 underline"
                : "hover:underline hover:text-orange-600"
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/dashboard/add-recipes"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 underline"
                : "hover:underline hover:text-orange-600"
            }
          >
            Add Recipe
          </NavLink>

          <NavLink
            to="/dashboard/my-recipes"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-orange-600 underline"
                : "hover:underline hover:text-orange-600"
            }
          >
            My Recipes
          </NavLink>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-6 bg-base-200">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
