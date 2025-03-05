import Button from "./button";

export default function Card() {
  return (
    <div className="flex flex-col shadow-lg shadow-black/30 gap-4 max-w-sm text-white bg-linear-to-b from-foreground1 to-foreground2 p-8 rounded-2xl border-t-3 border-white/5 hover:scale-[1.01] transition-all">
      <h3 className="text-3xl font-bold">title</h3>
      <img className="rounded-2xl" src="placeholder.jpg" alt="" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolores ab
        corrupti blanditiis qui nemo deleniti? Porro, laboriosam pariatur?
        Quaerat tenetur dolores sunt at repudiandae aperiam, labore eius harum
        cupiditate!
      </p>
      <div className="flex flex-row gap-4 place-items-around mx-auto mt-4">
        <Button>Website</Button>
        <Button style="outline">GitHub</Button>
      </div>
    </div>
  );
}
