import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 blogs">
        <div className="blog bg-white rounded shadow p-4">
          <img
            src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png"
            alt="cors"
            className="w-full rounded"
          />
          <div className="blog_body mt-4">
            <h2 className="text-2xl font-semibold">What is cors?</h2>
            <p>
              Cross-origin resource sharing is a mechanism that allows
              restricted resources on a web page to be requested from another
              domain outside the domain from which the first resource was
              served. A web page may freely embed cross-origin images,
              stylesheets, scripts, iframes, and videos.
            </p>
            <p>
              When we are use same desktop sharing our REST api server side to
              client side, we should use cors dependency as a server middleware.
            </p>
            <p>
              Use CORS to allow cross-origin access. CORS is a part of HTTP that
              lets servers specify any other hosts from which a browser should
              permit loading of content.
            </p>
          </div>
        </div>
        <div className="blog bg-white rounded shadow p-4">
          <img
            src="https://firebase.google.com/images/social.png"
            alt="cors"
            className="w-full rounded"
          />
          <div className="blog_body mt-4">
            <h2 className="text-2xl font-semibold">Why are using firebase? </h2>
            <p>
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience. When the device regains connection, the
              Realtime Database synchronizes the local data changes with the
              remote updates that occurred while the client was offline, merging
              any conflicts automatically.
            </p>
            <p>
              Google Firebase offers many features that pitch it as the go-to
              backend development tool for web and mobile apps.
            </p>
            <p>
              The Realtime Database provides a flexible, expression-based rules
              language, called Firebase Realtime Database Security Rules, to
              define how your data should be structured and when data can be
              read from or written to. When integrated with Firebase
              Authentication, developers can define who has access to what data,
              and how they can access it.
            </p>
            <h2 className="text-2xl font-semibold">
              {" "}
              What other options do you have to implement authentication?
            </h2>
            <p>
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through,
              <ul className="list">
                <li>Cards</li>
                <li>Retina scans</li>
                <li>Retina scans</li>
                <li>Voice recognition</li>
                <li>Fingerprints</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="blog bg-white rounded shadow p-4">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5612AQHUplMGIv3KDg/article-cover_image-shrink_720_1280/0/1645382397748?e=2147483647&v=beta&t=RBikKY7lOJL9jtse2JFrHVpfEqARNInaivao3n77SbQ"
            alt="cors"
            className="w-full rounded"
          />
          <div className="blog_body mt-4">
            <h2 className="text-2xl font-semibold">
              How does the private route work?
            </h2>
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </p>
            <p>
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application. This is a
              React Router tutorial which teaches you how to use Private Routes
              with React Router 6.
            </p>
          </div>
        </div>
        <div className="blog bg-white rounded shadow p-4">
          <img
            src="https://i.ytimg.com/vi/uVwtVBpw7RQ/maxresdefault.jpg"
            alt="cors"
            className="w-full rounded"
          />
          <div className="blog_body mt-4">
            <h2 className="text-2xl font-semibold">What is Node?</h2>
            <p>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </p>
            <br />
            <p>
              Javascript was always a client side language until node.js. Common
              server side languages include PHP, Python, Perl, Ruby and several
              more. Node enables you to use Javascript server side. This now
              means you can have a consistent language both ends which could not
              be done prior to Node.
            </p>
            <h2 className="text-2xl font-semibold">How does Node work?</h2>
            <p>
            Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
            </p>
            <p>
            Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
