import { Appartment } from "../Models/modelAppartment";

export const GetAppartment = async (): Promise<Array<Appartment>> => {
  const response = await fetch("/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await response.json();
};
