import { Brand } from "./Brand";
import { City } from "./City";

export interface Tool2 {
  name: string;        // Nombre de la herramienta
  description: string; // Descripción de la herramienta
  brand: Brand;       // Marca de la herramienta
  image: string;       // URL de la imagen de la herramienta
  price: number;       // Precio de la herramienta
  amount: number;
  city:City[];     // Cantidad de la herramienta
}
