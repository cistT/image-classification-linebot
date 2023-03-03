import { getUserData } from "@/utiles/creatureModel";
import { Creature } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Index = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const [creatures, setCreatures] = useState<Creature[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/bingo/${id}`);
      const fetchedUserData = await res.json();
      if (fetchedUserData) {
        setCreatures(fetchedUserData.creatures);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return <>Loading...</>;
  }

  if (!creatures) {
    return <>faild</>;
  }

  return (
    <>
      {creatures.map((creature) => (
        <div key={creature.name}>
          <h1>{creature.name}</h1>
          {creature.imageURL ? (
            <Image
              width={300}
              height={300}
              src={`https://drive.google.com/uc?id=1D6GM5t_mD0-2_mkp30-m36z9dEXt2nxE`}
              alt={creature.name}
            />
          ) : (
            <>NoImage</>
          )}
        </div>
      ))}
    </>
  );
};

export default Index;
