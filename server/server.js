import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import fs from "fs";
import path from "path";
import {blogData} from '../src/blogData';


import App from "../src/App";

const PORT = 8000;

const app = express();
const router = express.Router();

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }

    app.get('/', (req,res) => {
      var data = {blogData};
      
      //res.json(data);
      console.log('Sent bloglist data');
    });
    app.get('/:id/:blogtitleId', (req,res) => {
      let blogId = req.url;
      let id = blogId.split('/')[1];
      var data = blogData.find( blog =>  blog.id=== id );
     
      //res.json(data);
      console.log('Sent blogPage data');
    });
    
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
        )}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(router)

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});