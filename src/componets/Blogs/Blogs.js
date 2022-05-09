import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div>
      <div class="crd">
        <div class="card-header text-center fw-bolder fs-1">Qus & Ans</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h3>1. Difference between javascript and node.js</h3>
            <p>
            <strong>Answer :</strong><br />
              1. Javascript is a programming language <strong>and</strong>{" "}
              node.js is the run time environment for javascript.
              <br />
              2. Javascript itself can only be run in the browser,but with the
              help of node.js javascript can run outsite of the browser.
              <br /> 3. Javascript run in the client site mostly,{" "}
              <strong>but</strong> node.js run in the server site mostly. <br />
              4. Javascript is capable enough to add HTML and play with the DOM,{" "}
              <strong>but</strong> node.js does not have capability to add HTML
              tags.
            </p>
          </li>
          <li class="list-group-item">
            <h3>2. When should you use nodejs and when should you use mongodb?</h3>
            <p>
              <strong>Answer :</strong> <br />
              NodeJS is a JavaScript runtime environment. It's actually helps
              JavaScript to run outside of server. It's used in server side
              development.<br/>MongoDB is NoSQL database which is document oriented.
              It represents data as of JSON documents. It's used for store data.<br/>
              So we should use MongoDB for storing data like database where we
              can store data and should use node.js to connect our client site
              to database by it's server site.
            </p>
          </li>
          <li class="list-group-item">
            <h3>3. What is the differences between sql and nosql databases?</h3>
            <p>
            <strong>Answer :</strong> <br/>
              1. SQL is the relational database,where NOSQL is
              distributed database. <br/>
              2. SQL is table based,NOSQL is document based. <br/>
              3. SQL update and insert synchronusly,but NOSQL update and
              insert asynchronusly.
            </p>
          </li>
          <li class="list-group-item">
            <h3>4. What is the purpose of jwt and how does it works?</h3>
            <p><strong>Answer :</strong><br/>
            The purpose of jwt is to secure API.If anyone wish to know my api data he can easily get it.But we use jwt token it ensure the secured API. <br/>When a user log in to the website,a token generates.Server send this token to client.Client store the token to local storage or browser cookies.<br/>Next time when the client makes a request, a copy of token is send to the server for authorization.Server verifies the JWT signature before giving the authorization.Server responds to the client request.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
