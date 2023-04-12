import { Carrousel } from "../components/Carrousel";
import { HomeLayout } from "../layout/HomeLayout";

export const HomePage = () => {
  return (
    <>
      <HomeLayout>
        <Carrousel />
      </HomeLayout>
    </>
  );
};
