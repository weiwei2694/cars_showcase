export async function fetchCards() {
  const headers = {
    "X-RapidAPI-Key": "271e912436mshaa83cc2a895539bp11d1b8jsn0e37a8fa637b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
