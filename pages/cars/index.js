import CarPage from "@/components/layout/templates/carsPage/CarPage";
import carsData from "@/data/carsdata";
function Details() {
  return (
    <div className="container grid grid-cols-12 gap-10 m-auto">
      {carsData.map((item) => (
        <div className="col-span-12 md:col-span-6 xl:col-span-4 " key={item.id}>
          <CarPage carsData={item} />
        </div>
      ))}
    </div>
  );
}

export default Details;
