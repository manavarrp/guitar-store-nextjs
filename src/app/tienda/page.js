

import ListGuitars from "../components/ListadoGuitarras";
import DashboardLayout from "../dashboard/layout";

export const metadata = {
  title: "GuitarLA - Tienda",
};

const Tienda = () => {

  return (
    <DashboardLayout>
        <ListGuitars />
    </DashboardLayout>
  );
};

export default Tienda;


