import Square from "@/features/bingo/components/Square";
import { getUserData } from "@/utiles/creatureModel";
import { Creature } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./[id].module.scss";

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

  const squares = [
    creatures.slice(0, 3),
    creatures.slice(3, 6),
    creatures.slice(6, 9),
  ];

  return (
    <>
      {squares.map((square, i) => {
        return (
          <div className={styles["container"]} key={i}>
            {square.map((creature) => (
              <Square
                key={creature.name}
                label={creature.name}
                imageURL={creature.imageURL}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Index;
