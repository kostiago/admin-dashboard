import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <section>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar /> {children}
      </div>
    </section>
  );
};

export default Layout;
