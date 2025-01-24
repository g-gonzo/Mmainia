import Image from "next/image";
import Styles from "./grw.module.css";
import pictures1 from "../../public/images/mono1.png";
import pictures2 from "../../public/images/wheatstr1.png";
import pictures3 from "../../public/images/SGFC1.png";
import pictures4 from "../../public/images/cococoir1.png";
import pictures5 from "../../public/images/lmc1.jpg";
import pictures6 from "../../public/images/brdsd2.jpg";
import pictures7 from "../../public/images/lmc2.jpg";

export default function Page() {
  return (
    <>
      <div>
        <h1>Equipment for Growing Stuff!</h1>
        <div className={Styles.container}>
          <div className={Styles.cardcontain}>
            <div className="card">
              <Image src={pictures1} className={Styles.img} alt={"alt"} />
              <div>
                <h5 className={Styles.h5}>MT-235-1010 12x24x12 MonoTub (Delux)</h5>
                <p className={Styles.p}>
                Get up and running quick with this Modern LabTeck MonoTub Kit. It comes complete with filter set and plugs for germination and fruiting.  $45.00 
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
                <h5 className={Styles.h5}>SG-110-4550 Wheat Straw Substrate</h5>
                <p className={Styles.p}>
                Wheat straw is a great substrate mixer, high in nutrients cost effective. 25 pound bag. $23.00
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
                <h5 className={Styles.h5}>FC-200-1025 12x24x12 SCFC</h5>
                <p className={Styles.p}>
                Shot Gun Fruiting Chamber for your PTEK growing needs. Med yield, great for beginners. $40.50
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
                <h5 className={Styles.h5}>SG-110-5500 Coco Coir Substrate</h5>
                <p className={Styles.p}>
                Coco Coir sourced straight from Hawaii, only the best for gourmet mushrooms growing.  25 pound bag. $25.95
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
                <h5 className={Styles.h5}>LC-100-2525 Lions Mane 30ml</h5>
                <p className={Styles.p}>
                Lions Mane Liquid Culture, lab grown & tested. Best quality, best taste, gourmet standard. $25.00
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
                <h5 className={Styles.h5}>SG-110-2525 BirdSeed Substrate Mix</h5>
                <p className={Styles.p}>
                Special blend finest bird seed, for mushroom substate mix. Great for hearty shrooms.   25 pound bag. $35.25
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
                <h5 className={Styles.h5}>LC-100-3030 King Oyster 285ml</h5>
                <p className={Styles.p}>
                King Oyster Liquid Culture kit, great taste, easy grow. Lab tested, with syringe. $40.00 
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
