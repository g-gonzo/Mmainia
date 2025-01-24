import Link from "next/link";
import styles from "./faqStyle.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.backcolor}>
        <div className={styles.division1}>
          <h1>FAQ (Frequently Asked Questions - About Mushrooms.)</h1>
        </div>
        <div className={styles.division2}>
          <h3>
            <strong>Q: What is mushroom spawn?</strong>
          </h3>

          <p className={styles.p}>
            <strong>A: Mushroom spawn </strong> is a living fungal culture, or
            mycelium, that's grown on a substrate and used to grow mushrooms.
          </p>

          <h3>
            <strong>Q: What is substrate?</strong>
          </h3>

          <p className={styles.p}>
            <strong>A: Mushroom substrate </strong> is a growing medium that
            provides mushrooms with the nutrients, moisture, and structure they
            need to grow. It's similar to soil for plants, but mushrooms
            decompose organic material in the substrate instead of
            photosynthesizing.
          </p>

          <h3>
            <strong>Q: What is a mushroom monotube?</strong>
          </h3>

          <p className={styles.p}>
            <strong>A: Monotub </strong> is a modified plastic tub, like those
            ones you see at big box stores, typically used for storing or moving
            items. They look like huge Tupperware, essentially. In the context
            of mushroom cultivation, a monotub is used as a fruiting chamber
            (the container in which fungi is cultivated).
          </p>

          <h3>
            <strong>Q: What is a mushroom fruiting block?</strong>
          </h3>

          <p className={styles.p}>
            <strong>A: Mushroom fruiting block </strong> is a block of sawdust
            inoculated with mushroom mycelium that is ready to produce mushrooms
            with just a few steps. They are an affordable and easy way to grow
            fresh mushrooms at home.
          </p>

          <h3>
            <strong>Q: What is mushroom mycelium?</strong>
          </h3>

          <p className={styles.p}>
            <strong>A: Mushroom mycelium </strong> is the vegetative part of a
            mushroom's life cycle that absorbs nutrients and grows as a network
            of thin fungal strands called hyphae. Mycelium is similar to a
            plant's root system, and has many important functions.
          </p>

          <h3>
            <strong>Q: What is mushroom agar?</strong>
          </h3>

          <p className={styles.p}>
            <strong>A: Agar</strong> is a gelatinous substance derived from red
            seaweed, plays a crucial role in mushroom cultivation. It's
            primarily used in petri dishes or jars to germinate spores and
            culture mycelium.
          </p>

          <h3>
            <strong>Q: What is a shotgun fruiting chamber (SGFC)?</strong>
          </h3>

          <p className={styles.p}>
            <strong>A: SGFC</strong>Like a little mushroom greenhouse, a shotgun
            fruiting chamber is an easy setup that creates the ideal environment
            to grow fungi in. Essentially, it's a clear bin filled with air
            holes with a layer of damp perlite on the bottom.
          </p>

          <h3>
            <strong>
              Q: What is the difference between a monotub and SGFC?
            </strong>
          </h3>

          <p className={styles.p}>
            <strong>A: Method of use </strong> – When using monotubs, you
            commonly add grain spawn and substrate directly to the monotub for
            incubation and fruiting. But when using shotgun fruiting chambers
            you place fully colonized PF Tek cakes, substrate blocks, grow bags
            or grow kits in the chamber for fruiting.
          </p>
        </div>
      </div>
    </>
  );
}
