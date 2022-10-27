/** src/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import axios, {Axios, AxiosResponse} from "axios";

interface Post{
    userId:number,
    id:number,
    title:string,
    body:string
}


// getPosts - A request to fetch all posts in the list.
// getPost - A request to fetch a single post by id.
// updatePost - A request to update a post with new values.
// deletePost - A request to delete an existing post.
// addPost - A request to add a new post to the existing list.


// getting all posts
export class controller{
    
public async getPosts(req:Request,res:Response, next:NextFunction):Promise<any>{

    //get some posts

    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts:[Post] = result.data;
    return res.status(200).json({
        message:posts
    });
}



// getting a single post

public async getPost(req:Request, res:Response, next:NextFunction):Promise<any>{


let id:string = req.params.id;
let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

let posts:[Post]= result.data;

return res.status(200).json({
    message:posts
});

}


//Updating A Post 

public async updatePost(req:Request, res:Response, next:NextFunction):Promise<any>{


    let id: string = req.params.id;
    let title: string = req.body.title?? null;
    let body: string = req.body.body?? null;


    // update the post
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(title && { title }),
        ...(body && { body })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};


// deleting a post

public async deletePost(req:Request, res:Response, next:NextFunction):Promise<any>{

let id:string = req.params.id;
let title:string = req.body.title??null;
let body:string = req.body.body??null;

let response: AxiosResponse= await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

res.status(200).json({
    message: 'post deleted successfully'
})

}


//add a post

public async addPost(req:Request, res:Response, next:NextFunction):Promise<any>{

    let title:string = req.body.title;
    let body:string = req.body.body;

    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`,{

        title,
        body
    });

    res.status(200).json({
        message: response.data
    });

}

}

export const myController =  new controller();


