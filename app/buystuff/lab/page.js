import Image from "next/image";
import Styles from "./lab.module.css";
import pictures1 from "../../public/images/mjar1.png";
import pictures2 from "../../public/images/spb1.jpg";
import pictures3 from "../../public/images/lg1.jpg";
import pictures4 from "../../public/images/agar1.jpg";
import pictures5 from "../../public/images/mjar2.webp";
import pictures6 from "../../public/images/star1.webp";
import pictures7 from "../../public/images/aw1.jpg";

export default function Page() {
  return (
    <>
      <div>
        <h1>Equipment for Laboratory!</h1>
        <div className={Styles.container}>
          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures1} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>MJ-125-1015 Case of 12 KelliTek- 16 oz No Taper Jar - Clear</h5>
                <p className={Styles.p}>
                Easy view, clear pint jars. Great for mycelium inspection, and growth.  $32.00 
                </p>
                <button
                  className={Styles.button}
                  href="#"
                  class="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures2} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>BS-200-3005 3-Pack of 16 oz Spray Bottles</h5>
                <p className={Styles.p}>
                Lab grade spray bottles allow for all types of cleaning chemical combinations.  $15.00 
                </p>
                <button
                  className={Styles.button}
                  href="#"
                  class="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures3} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>LG-700-5150 Latex Gloves (box of 200 pairs)</h5>
                <p className={Styles.p}>
                Laboratory grade latex gloves for all purpose use. Blue in color. $35.00 
                </p>
                <button
                  className={Styles.button}
                  href="#"
                  class="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures4} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>PD-900-7001 PetriDish – Agar Plates (10 ea)</h5>
                <p className={Styles.p}>
                Pure tech agar plates, MEA laboratory grade petri-dishes, 1 oz. $25.00
                </p>
                <button
                  className={Styles.button}
                  href="#"
                  class="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures5} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>MJ-110-2501 Ball Mix Set (4, 8, 16, 32 oz) Case 12</h5>
                <p className={Styles.p}>
                Ball brand, mixed set mason jars, total of 12, (4, 8, 16, 32 oz). $40.00
                </p>
                <button
                  className={Styles.button}
                  href="#"
                  class="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures6} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>LS-0075-9999 Still Air Box (36x14x14)</h5>
                <p className={Styles.p}>
                KelliTek still air box, used for spawn inoculation, and inspection of agar plates. $75.00
                </p>
                <button
                  className={Styles.button}
                  href="#"
                  class="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures7} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>AW-7550-9971 Alcohol Wipes (box of 100)</h5>
                <p className={Styles.p}>
                Best brand alcohol wipes, for laboratory use, easy clean, single use. 75% Isopropyl $15.00
                </p>
                <button
                  className={Styles.button}
                  href="#"
                  class="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
