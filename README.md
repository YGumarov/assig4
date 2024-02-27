<h1>Assignment 4</h1>
<a href="https://assig4.onrender.com"><h1>DEPLOY: https://assig4.onrender.com</h1></a>
<h1>Login:Admin</h1>
<h1>Password:123456</h1>
<p>To run this project locally, follow these steps:</p>
<ol>
    <li>
        <p>Clone the repository:</p>
        <pre><code>git clone https://github.com/YGumarov/assig4</code></pre>
        <p>This command will create a local copy of the repository on your machine.</p>
    </li>
    <li>
        <p>Navigate to the project directory:</p>
        <pre><code>cd &lt;project-directory&gt;</code></pre>
    </li>
    <li>
        <p>Install dependencies:</p>
        <pre><code>npm install</code></pre>
    </li>
    <li>
        <p>Run the application:</p>
        <pre><code>npm start</code></pre>
    </li>
</ol>
<h2>Project Structure</h2>
<p>The project structure is as follows:</p>
<pre><code>
├──.env
├── app.js
├── models
│   ├── game.js
│   ├── item.js
│   ├── soon.js
│   └── user.js
├── package.json
├── package-lock.json
├── public
│   ├── logo.ppg
│   └── styles.css
├── README.md
├── routes
│   ├── admin.js
│   ├── game.js
│   ├── history.js
│   ├── index.js
│   ├── language.js
│   ├── login.js
│   ├── logout.js
│   ├── soon.js
│   ├── profile.js
│   └── register.js
├── utils
│   ├── middleware.js
│   └── validation.js
└── views
    ├── admin.ejs
    ├── game.ejs
    ├── footer.ejs
    ├── header.ejs
    ├── history.ejs
    ├── index.ejs
    ├── login.ejs
    ├── soon.ejs
    ├── profile.ejs
    └── register.ejs
</code></pre>
<ul>
    <li><strong>app.js</strong>: Entry point of the application.</li>
    <li><strong>models/</strong>: Directory containing Mongoose models for anime, movie, and user data.</li>
    <li><strong>public/</strong>: Directory for static assets such as images and stylesheets.</li>
    <li><strong>routes/</strong>: Directory containing route handlers for different parts of the application.</li>
    <li><strong>utils/</strong>: Directory containing utility functions, including authentication and validation.</li>
    <li><strong>README.md</strong>: This file, providing an overview of the project and instructions for setup.</li>
</ul>
<h2>Middleware (auth.js)</h2>
<p>The <code>auth.js</code> middleware provides functions for user authentication and authorization.</p>
<ul>
    <li>
        <p><strong>verifyToken</strong>: Verifies the JWT token present in the request cookies. If the token is valid, it sets <code>userId</code> and <code>username</code> in the request object and calls the next middleware. If the token is invalid or missing, it redirects the user to the login page.</p>
    </li>
    <li>
        <p><strong>redirectToHomeIfLoggedIn</strong>: Checks if a user is already logged in by verifying the JWT token. If the token is present and valid, it redirects the user to the home page. If not, it allows the request to proceed to the next middleware.</p>
    </li>
    <li>
        <p><strong>ifAdmin</strong>: Verifies the JWT token and checks if the user is an admin. If the user is an admin, it allows the request to proceed to the next middleware. Otherwise, it returns a 403 Forbidden error.</p>
    </li>
</ul>
<h2>API Endpoints (game.js and soon.js)</h2>
<p>The <code>game.js</code> and <code>soon.js</code> files contain API endpoints for fetching anime and movie data from external APIs and storing them in the database.</p>
<h3>game.js</h3>
<ul>
    <li><strong>GET /game</strong>: Renders the game page with an empty gameData array.</li>
    <li><strong>POST /game</strong>: Handles the POST request to search for game data. It queries the RAWG API (<code>https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(searchQuery)}</code>) with the search query provided in the request body. It then saves the retrieved game data to the database, associating it with the user's ID. Finally, it renders the anime page with the retrieved game data.</li>
</ul>
<h3>soon.js</h3>
<ul>
    <li><strong>GET /soon</strong>: Renders the game page with an empty gameData array.</li>
    <li><strong>POST /soon</strong>: Handles the POST request to search for new games data. It queries The RapidAPI (<code>https://new-videogames-releases.p.rapidapi.com/getMonthGames</code>) with the search query provided in the request body. It then saves the retrieved new games data to the database, associating it with the user's ID. Finally, it renders the movie page with the retrieved new games data. That data updates every mounth.</li>
</ul>
<p>These APIs utilize JWT tokens for authentication and authorization, ensuring that only authenticated users can access them.</p>
<h2>Usage</h2>
<p>To use the anime and movie APIs:</p>
<ol>
    <li>Make sure the server is running (<code>npm start</code>).</li>
    <li>Send a POST request to <code>/game</code> with a search query in the request body to search for game data.</li>
    <li>Send a POST request to <code>/soon</code> with a search query in the request body to search for new games data.</li>
</ol>
<p>The APIs will handle the requests, retrieve data from the external APIs, store them in the database, and render the corresponding pages with the retrieved data.</p>
<h2>Features</h2>
<ul>
    <li>User authentication with JWT tokens.</li>
    <li>Role-based access control (admin and regular user).</li>
    <li>CRUD operations for anime and movies.</li>
    <li>User profile management.</li>
</ul>
<h2>Dependencies</h2>
<ul>
    <li><a target="_new">axios</a>: Promise-based HTTP client for making requests.</li>
    <li><a target="_new">Express</a>: Web application framework for Node.js.</li>
    <li><a target="_new">body-parser</a>: Middleware for parsing incoming request bodies.</li>
    <li><a target="_new">cookie-parser</a>: Middleware for parsing cookies in Express.</li>
    <li><a target="_new">ejs</a>: Embedded JavaScript templates for rendering views.</li>
    <li><a target="_new">Mongoose</a>: MongoDB object modeling tool.</li>
    <li><a target="_new">jsonwebtoken</a>: JSON Web Token implementation for Node.js.</li>
    <li><a target="_new">bcryptjs</a>: Library for hashing passwords.</li>
    <li><a target="_new">dotenv</a>: Loads environment variables from a <code>.env</code> file.</li>
</ul>
<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a target="_new">LICENSE</a> file for details.</p>
