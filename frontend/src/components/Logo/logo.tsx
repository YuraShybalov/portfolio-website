import LogoImg from "../../assets/Logo-min.png";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={LogoImg} alt="Logo" className="h-12 w-12 object-contain" />
      <div className="flex flex-col items-center logo-text ml-2 text-sm font-semibold text-white leading-tight">
        <span className="gradient-text">FULL STACK</span>
        <span className="gradient-text">DEVELOPER</span>
      </div>
    </div>
  );
}
