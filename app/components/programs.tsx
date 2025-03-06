import type { ProgramType } from "~/data/programs";

export default function Programs({itemList}: {itemList: ProgramType[]}) {
  return (
    <div className="flex flex-wrap h-fit gap-8 mx-auto place-content-center">
      {itemList?.map((item: ProgramType) => (

          <div key={item.id} className="flex w-16 group relative justify-center">
            <img
              className="h-full object-cover grayscale-75 group-hover:grayscale-0 transition-all group-hover:scale-110 group-hover:blur-xs group-hover:brightness-50"
              src={item.icon}
              alt={item.name}
            />
            <p className=" font-bold text-sm absolute text-center place-self-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 w-16 z-10 p-1">{item.name}</p>
          </div>
      ))}
    </div>
  );
}
