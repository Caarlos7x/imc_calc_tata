import localFont from "next/font/local";
import CalcImc from "./calc_imc/CalcImc";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-start items-start">
      <CalcImc />
    </div>
  );
}
