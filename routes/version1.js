const express = require("express");
    router = express.Router();

const PostModel = require("../models/posts");

router.get("/", (request, response, next) => {
    response.send("Welcome to my API").status(200);
});

// Create a post

// Read All

router.get("/all", async (request, response) => {
    const getAllPosts = await PostModel.getAll();
    response.json(getAllPosts).status(200);
});

// Read One

router.get("/posts/:p_id?", async (request, response) => {
    const postId = request.params.p_id;
    const theActualPost = await PostModel.getPostById(postId);
    response.json(theActualPost).status(200);
});


module.exports = router;