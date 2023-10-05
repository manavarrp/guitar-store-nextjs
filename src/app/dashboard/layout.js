import Footer from "../components/footer";
import Header from "../components/header";


export default function DashboardLayout({ children }) {
  return (
    <>
      <section>
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
}
