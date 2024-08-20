"use client";

interface Tag {
  text: string;
  icon: JSX.Element;
}

export interface Image {
  src: string;
  alt: string;
}

interface BlogPlatformData {
  title: string;
  summary: string;
  tags: Tag[];
  image: Image;
  color: string;
  repo: string;
  link?: string;
}

const ProjectCard = ({
  title,
  summary,
  tags,
  image,
  color,
  repo,
  link,
}: BlogPlatformData) => {
  return (
    <div className="px-2">
      <div className="my-6 mx-auto p-4 rounded-md shadow dark:shadow-gray-600 flex flex-col items-center md:flex-row md:max-w-4xl ">
        <img className="rounded-lg max-w-sm object-cover" src={image.src} alt={image.alt} />
        <div>
          <div>
            <div className="">
              <div className="flex justify-center items-center gap-2 p-3">
                <p
                  className="font-bold text-2xl tracking-widest"
                  style={{ color: color }}
                >
                  {title}
                </p>
                <div className=" pt-1 ease-in-out duration-300 hover:scale-110">
                  <a href={link} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      data-darkreader-inline-fill=""
                    >
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                    </svg>
                  </a>
                </div>
                {link && (
                  <div className="text-md pt-1 ease-in-out duration-300 hover:scale-110">
                    <a href={link} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        data-darkreader-inline-fill=""
                      >
                        <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" sm:text-center px-2">{summary}</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

//skills
{
  /* <div className="py-4 flex gap-2 justify-center flex-wrap">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="font-extralight px-2 border rounded-full flex items-center"
                style={{ color: color, borderColor: color }}
              >
                <span className="text-lg">{tag.icon}</span>
                <span className="ml-1 text-sm">{tag.text}</span>
              </div>
            ))}
          </div> */
}

//description
{
  /* <div className="px-2 font-extralight tracking-wide leading-relaxed md:font-light">
            {summary}
          </div> */
}

// title and the links
{
  /* <div className="md:max-w-md lg:max-w-xl">
          <div className="flex justify-center items-center gap-2 p-3">
            <p
              className="font-bold text-2xl tracking-widest"
              style={{ color: color }}
            >
              {title}
            </p>
            <div className=" pt-1 ease-in-out duration-300 hover:scale-110">
              <a href={link} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  data-darkreader-inline-fill=""
                >
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                </svg>
              </a>
            </div>
            {link && (
              <div className="text-md pt-1 ease-in-out duration-300 hover:scale-110">
                <a href={link} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    data-darkreader-inline-fill=""
                  >
                    <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path>
                  </svg>
                </a>
              </div>
            )}
          </div>
          </div> */
}
