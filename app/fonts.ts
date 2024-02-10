import { Public_Sans, Poppins, Nunito_Sans, Lato } from "next/font/google";

export const public_sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400","500", "600", "700"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
