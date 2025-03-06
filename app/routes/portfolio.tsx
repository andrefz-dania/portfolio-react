import Card from "~/components/card";

export default function Portfolio() {
    return (
        <div className="flex flex-row gap-8 place-content-center mt-8 p-2 overflow-hidden max-w-screen">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}