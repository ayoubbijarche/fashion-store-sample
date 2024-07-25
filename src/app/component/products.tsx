"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import pb from "../lib/pb";

interface Product {
  title: string;
  price: string;
  img: string;
}

const List = () => {
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
  try {
    const records = await pb.collection("products").getList(1, 50, {
      sort: '-created',
    });
      const productList: Product[] = records.items.map(item => {
      const imgUrl = pb.files.getUrl(item, item.img);
      console.log("Constructed image URL:", imgUrl);
      return {
        title: item.title || item.name,
        price: item.price,
        img: imgUrl,
      };
    });
    setList(productList);
  } catch (e) {
    console.error("Error fetching products:", e);
  }
  };

  return (
    <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0  w-64 h-72">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[290px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-blue-200">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

const Products = () => {
  return (
    <div className="flex flex-grow flex-col w-full h-[50px] mt-4 ">
      <div className="flex w-full h-[50px] mt-0 justify-center">
        <h1 className="font-medium text-5xl w-[500px] text-center">
          Fresh And High Quality Clothes.
        </h1>
      </div>
      <div className="flex mt-24 ml-6">
        <List />
      </div>
    </div>
  );
};

export default Products;
