import styles from "./page.module.css";
import StaticCentreCard from "@/components/CentreGallery/StaticCentreCard";

const SearchPage = () => {
  const handleSubmit = async () => {
    try {
      const response = await fetch(`${config.baseURL}/eventcentre/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          duplicatedButton,
          // duplicatedButton2,
          duplicatedButton3,
        }),
      });
      if (response.ok) {
        // Handle successful response
        console.log('Data submitted successfully');
        console.log(duplicatedButton);
        console.log(duplicatedButton3)

      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      // Handle any errors
      console.log(error);
      // console.log("car")
    }
  };
  return (
    <div className={styles["searchPageHolder"]}>
      <div className={styles["searchCardHolder"]}>
        <StaticCentreCard />
        <StaticCentreCard />
        <StaticCentreCard />
        <StaticCentreCard />
      </div>
    </div>
  );
};

export default SearchPage;
