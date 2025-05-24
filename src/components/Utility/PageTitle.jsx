import { useEffect } from "react";
import { useLocation } from "react-router";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = "Recipe Book";
    if (path === "/") title = "Home - Recipe Book";
    else if (path === "/all-recipes") title = "All Recipes - Recipe Book";
    else if (path === "/add-recipes") title = "Add Recipes - Recipe Book";
    else if (path === "/my-recipes") title = "My Recipes - Recipe Book";
    else if (path === "/login") title = "Login - Recipe Book";
    else if (path === "/register") title = "Register - Recipe Book";
    else title = "Recipe Book";

    document.title = title;
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageTitle;
