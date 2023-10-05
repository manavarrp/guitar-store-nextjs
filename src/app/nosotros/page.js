import Image from "next/image";
import styles from '../styles/nosotros.module.css'
import DashboardLayout from "../dashboard/layout";

export const metadata = {
  title: "GuitarLA - Nosotros",
};

const Nosotros = () => {
  return (
    <DashboardLayout>
      <main className="contendor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen Acerca de Nosotros'/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus
              augue, tincidunt vitae dapibus nec, placerat eget arcu. Integer
              faucibus convallis risus et maximus. Suspendisse potenti.
              Phasellus augue justo, faucibus sed urna ac, iaculis dapibus
              risus. Ut euismod facilisis arcu vel euismod. Nunc efficitur ex
              lorem, at aliquet eros dignissim nec. Quisque sollicitudin
              consectetur elit sit amet faucibus. Phasellus nec ligula in urna
              volutpat elementum.
              </p>
              <p>
               Aliquam in aliquam tortor, sed
              faucibus lacus. Pellentesque eu suscipit orci. Donec euismod
              libero sed arcu viverra tempus. Proin non velit sit amet arcu
              varius lacinia. Aliquam fringilla nibh vitae risus sagittis, non
              hendrerit erat facilisis. Duis condimentum urna vitae tortor
              pharetra ultrices. 
            </p>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Nosotros;
