import express from "express";
import { myController } from "../controllers/posts";

const routes =  express.Router();

routes.get('/posts', myController.getPosts);
routes.get('/posts/:id', myController.getPost);
routes.put('/update/posts/:id', myController.updatePost);
routes.post('/delete/posts/:id', myController.deletePost);
routes.post('/posts/add', myController.addPost);

export = routes;




