import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PoapCard } from "./PoapCard/PoapCard";
import { Loader } from "./Loader/Loader";

import { places } from "../constants/places";
import { Footer } from "./layout/Footer";

export function Places() {
  const [data, setData] = useState<[]>();
  const [poapsDone, setPoapsDone] = useState<[]>();
  let test: any = [];
  const { query } = useRouter();

  const POAP_API: string = process.env.NEXT_PUBLIC_POAP_API
    ? process.env.NEXT_PUBLIC_POAP_API
    : "";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": POAP_API,
      },
    };

    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.poap.tech/actions/scan/${query.address}`,
          options
        )
          .then((res) => res.json())
          .catch((err) => console.error(err));

        setData(response);
      } catch (err) {
        console.log(err);
      }
    }
    if (query.address !== undefined) {
      fetchData();
      let address = query.address as string;
      localStorage.setItem("address", address);
    }
  }, [query]);

  useEffect(() => {
    const mapPoapsDone = places.map((poap: any) => {
      return data?.filter(function (item: any) {
        return item.event.id === poap.id;
      });
    });
    mapPoapsDone.map((el: any) => {
      if (el !== undefined) {
        if (el.length === 0) {
          return;
        } else {
          test.push(el);
        }
      }
    });
    setPoapsDone(test.flat());
  }, [data]);

  return (
    <>
      {data?.length === 0 ? (
        <div className="flex h-screen justify-between flex-col items-center">
          <div className="mt-60 ">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="flex h-screen flex-col items-center bg-gray-100">
          <div className="overflow-auto w-screen h-full bg-no-repeat text-center">
            <div className="flex flex-col items-center">
              <h1 className="font-pathway text-4xl text-studentsBlue-200 mt-10">
                POAP Osyssey
              </h1>
              <h2 className="font-comforter text-4xl text-studentsBlue-100 mt-4">
                el estu tour
              </h2>
              <div className="font-pathway text-xl text-studentsBlue-100 m-4 md:w-2/3">
                POAP Odyssey 'el estu tour' es un juego donde coleccionas
                momentos, vivencias y experiencias de la mano de tu equipo de
                baloncesto, el Estu.
              </div>
            </div>
            <div className="text-center pb-16">
              <div className="grid justify-items-center ml-16">
                {places?.map((poap: any, index: number) => (
                  <div className="-mt-4">
                    {index % 2 ? (
                      <div className="-mb-1.5">
                        <div id="roadmapRight" />
                        <PoapCard poap={poap} poapsDone={poapsDone} />
                      </div>
                    ) : (
                      <div className="-mb-1.5">
                        <div id="roadmapLeft" />
                        <PoapCard poap={poap} poapsDone={poapsDone} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
