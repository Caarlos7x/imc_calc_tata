import CalcImc from "./calc_imc/CalcImc";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-start items-start">
      <CalcImc />
    </div>
  );
}
