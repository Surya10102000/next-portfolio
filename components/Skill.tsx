import { languages, frameworks, tools } from "@/constants/helper";

const Skill = () => {
  return (
    <div className="bg-inherit rounded-lg mx-auto max-w-4xl min-h-32 -translate-y-10 shadow shadow-gray-800 dark:shadow-gray-700 sm:grid sm:grid-cols-3 justify-between">
      {/* languages */}
      <div >
        <div className="text-center text-xl pt-6 font-extrabold tracking-wider">
          Languages I Speak
        </div>
        <div className="grid grid-cols-2 gap-2 py-4 px-8">
          {languages.map((x, i) => (
            <div >
              <div className="mx-auto w-12 text-center">{x.icon}</div>
              <div className="mx-auto text-sm font-light text-center mt-1">{x.text}</div>
            </div>
          ))}
        </div>
      </div>
      {/* frameworks */}
      <div>
        <div className="text-center text-xl pt-6 font-extrabold tracking-wider">
          My Frameworks
        </div>
        <div className="grid grid-cols-2 gap-2 py-4 px-8">
          {frameworks.map((x, i) => (
            <div className="">
              <div className="mx-auto w-12 text-center">{x.icon}</div>
              <div className="mx-auto text-sm font-light text-center mt-1">{x.text}</div>
            </div>
          ))}
        </div>
      </div>
      {/* dev tools */}
      <div>
        <div className="text-center text-xl pt-6 font-extrabold tracking-wider">
          My Dev Tools
        </div>
        <div className="grid grid-cols-2 gap-2 py-4 px-8">
          {tools.map((x, i) => (
            <div>
              <div className="mx-auto w-12 text-center">{x.icon}</div>
              <div className="mx-auto text-sm font-light text-center mt-1">{x.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skill;
