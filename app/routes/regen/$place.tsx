import { Link, LoaderFunction, useLoaderData, useParams } from "remix";
import { BackToHome } from "~/components/BackToHome";
import { locationService } from "~/services/locationService";
import { weatherService } from "~/services/weatherService";

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const locationData = await locationService(params.place!);
    const { lat, lng } = locationData.results[0].geometry.location;

    const weatherData = await weatherService(lat, lng);
    return weatherData;
  } catch (error) {
    return false;
  }
};

export default function Index() {
  const data = useLoaderData();
  try {
    return (
      <div className="h-full flex items-center justify-center">
        <div>
          <h1 className="text-7xl font-bold mb-8">
            {data.weather[0].main === "Rain"
              ? "Ja, het regent! 🤬"
              : "Nee, het regent niet 😁"}
          </h1>
          <BackToHome />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div>
          <div>
            Oeps! Geen locatie of weerbericht kunnen vinden. Probeer een andere
            locatie
          </div>
          <BackToHome />
        </div>
      </div>
    );
  }
}
