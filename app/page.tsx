import { Card, CardHeader } from "@/src/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <><div className="  justify-center items-center flex gap-2 p-5">
      <button>Bonjour</button>
      <p>salut</p>
    </div>

      <Card>
        <CardHeader className="flex text-center ">
          Salut
        </CardHeader>
      </Card></>

  );
}
