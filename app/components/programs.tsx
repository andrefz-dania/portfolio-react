import type { ProgramType } from "~/data/programs";

export default function Programs({itemList}: {itemList: ProgramType[]}) {
  return (
    <div className="flex flex-wrap h-fit gap-4 mx-auto place-content-center">
      {itemList?.map((item: ProgramType) => (

          <div key={item.id} className="flex w-16 group rounded-full aspect-square relative justify-center">
            <img
              className="h-full object-cover grayscale-75 group-hover:grayscale-0 transition-all hover:scale-110 group"
              src={item.icon}
              alt={item.name}
            />
            <p className="text-sm absolute -bottom-6 text-nowrap text-center place-self-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">{item.name}</p>
          </div>
      ))}
    </div>
  );
}
