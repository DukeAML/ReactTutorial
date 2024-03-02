
import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express();
const port = 3000;



app.get("/api/list-blogs", async function (req, res) {
    const blogs = await prisma.blog.findMany({
        include : {
            author : true
        }
    });

    const formattedBlogs = blogs.map((blog) => {
        return {
            title : blog.title,
            author : blog.author.username,
            date : blog.createdAt
        }
    })

    res.status(200).json(
        formattedBlogs
    )
});



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});



