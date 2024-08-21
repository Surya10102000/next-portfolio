import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <div>
      <div className="p-8 flex flex-col gap-6 items-center bg-slate-300 dark:bg-slate-950">
        <div >
          <img className="m-auto" src="/logo.svg" alt="logo" />
        </div>
        <div className="flex gap-4">
          <LinkButton />
        </div>
        <div>
          <p className="font-light text-sm">Built with care by ©Surya</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
