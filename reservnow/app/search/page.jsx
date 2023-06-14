import styles from "./page.module.css";
import StaticCentreCard from "@/components/CentreGallery/StaticCentreCard";

const SearchPage = ({}) => {
  return (
    <div className={styles["searchPageHolder"]}>
      <div className={styles["searchCardHolder"]}>
         <StaticCentreCard/>
         <StaticCentreCard/>
         <StaticCentreCard/>
         <StaticCentreCard/>
      </div>
    </div>
  );
};

export default SearchPage;
