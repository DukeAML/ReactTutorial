// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type Blog = {
    title : string;
    author : string;
    date : Date;
}

const blogs : Blog[] = [
    {
        title : "How to Cook an Omelet",
        author : "Keith",
        date : new Date(2009, 0, 12)
    },
    {
        title : "Top 10 Vacation Spots",
        author : "Vincent Price",
        date : new Date(2017, 1, 1)
    },
    {
        title : "How to Choose your Major",
        author : "Owen Astrachan",
        date : new Date(2020, 2, 22)
    },
    {
        title : "WU Restaurants Ranked",
        author : "Duke Chronicle",
        date : new Date(2023, 8, 4)
    },
    {
        title : "Math 212 Study Guide",
        author : "Ingrid Daubechies",
        date : new Date(2018, 3, 19)
    }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(blogs);
}
