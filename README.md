<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kartly - MERN E-Commerce Project</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            line-height: 1.6;
            color: #24292e;
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
        }
        h1, h2, h3 {
            border-bottom: 1px solid #eaecef;
            padding-bottom: 0.3em;
            margin-top: 24px;
            margin-bottom: 16px;
            font-weight: 600;
        }
        h1 { font-size: 2.25em; }
        h2 { font-size: 1.75em; }
        h3 { font-size: 1.25em; }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
            background-color: #f6f8fa;
            padding: 0.2em 0.4em;
            margin: 0;
            font-size: 85%;
            border-radius: 3px;
        }
        pre {
            background-color: #f6f8fa;
            padding: 16px;
            overflow: auto;
            border-radius: 6px;
            font-size: 85%;
        }
        pre code {
            padding: 0;
            margin: 0;
            background-color: transparent;
            border-radius: 0;
        }
        ul, ol {
            padding-left: 2em;
        }
        li {
            margin-bottom: 0.5em;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        strong {
            font-weight: 600;
        }
        hr {
            height: 0.25em;
            padding: 0;
            margin: 24px 0;
            background-color: #e1e4e8;
            border: 0;
        }
    </style>
</head>
<body>

    <h1>Kartly: A Full-Stack MERN E-Commerce Platform</h1>

    <!-- 
        You can add a screenshot of your app here! 
        Example: <img src="path_to_your_screenshot.png" alt="Kartly App Screenshot" style="width:100%; border-radius: 6px;">
    -->

    <p>
        <strong>Kartly</strong> is a fully-featured e-commerce marketplace built from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates a complete, end-to-end application with a rich feature set for both customers and sellers, including product management, a shopping cart, a full checkout process, and user authentication.
    </p>

    <h2>Key Features</h2>
    <ul>
        <li><strong>Complete Shopping Experience:</strong> Users can browse products, filter by category, view details, add items to a cart, and proceed through a full checkout flow.</li>
        <li><strong>Dual User Roles:</strong> The platform supports both <strong>Customers</strong> (for buying) and <strong>Sellers</strong> (for managing inventory), with role-based access control.</li>
        <li><strong>Seller Dashboard:</strong> Sellers have a dedicated dashboard to create, edit, delete, and manage their product listings, including image uploads.</li>
        <li><strong>User Authentication:</strong> Secure user registration and login system using JSON Web Tokens (JWTs) for session management and <code>bcryptjs</code> for password hashing.</li>
        <li><strong>Customer Profiles & Order History:</strong> Logged-in users can manage their profiles (including a default shipping address) and view a complete history of their past orders with detailed invoice pages.</li>
        <li><strong>Order Management:</strong> Customers can cancel their pending orders, and sellers have a dedicated view to see all incoming orders for their products.</li>
        <li><strong>Responsive & Modern UI:</strong> A clean, professional, and fully responsive user interface built with React and the React-Bootstrap component library.</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
        <li><strong>Frontend:</strong> React, React-Bootstrap, React Router, Context API</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB with Mongoose</li>
        <li><strong>Authentication:</strong> JSON Web Tokens (JWT), bcryptjs</li>
        <li><strong>File Handling:</strong> Multer for server-side image uploads</li>
    </ul>

    <h2>Project Structure</h2>
    <p>The project is organized as a monorepo with two main folders:</p>
    <ul>
        <li><code>/frontend</code>: Contains the entire React application.</li>
        <li><code>/backend</code>: Contains the Express.js server, API routes, controllers, and database models.</li>
    </ul>

    <hr>

    <h2>Getting Started</h2>
    <p>Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.</p>

    <h3>Prerequisites</h3>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a> (which includes npm)</li>
        <li><a href="https://www.mongodb.com/try/download/community">MongoDB</a> installed and running locally.</li>
    </ul>

    <h3>Installation & Setup</h3>
    <ol>
        <li>
            <strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/your-username/kartly.git
cd kartly</code></pre>
        </li>
        <li>
            <strong>Install Backend Dependencies:</strong>
            <pre><code>npm install --prefix backend</code></pre>
        </li>
        <li>
            <strong>Install Frontend Dependencies:</strong>
            <pre><code>npm install --prefix frontend</code></pre>
        </li>
        <li>
            <strong>Environment Variables:</strong>
            <p>Create a <code>.env</code> file in the <code>/backend</code> directory and add the following variables. Replace the placeholder values with your own.</p>
            <pre><code># /backend/.env

MONGO_URI=mongodb://127.0.0.1:27017/kartlyDB
JWT_SECRET=yourrandomjwtsecretkey</code></pre>
            <ul>
                <li><code>MONGO_URI</code>: Your MongoDB connection string.</li>
                <li><code>JWT_SECRET</code>: A long, random string used for signing authentication tokens.</li>
            </ul>
        </li>
        <li>
            <strong>Create the Uploads Folder:</strong>
            <p>Inside the <code>/backend</code> directory, manually create a folder named <code>uploads</code>.</p>
        </li>
        <li>
            <strong>Seed the Database (Optional):</strong>
            <p>To populate the store with sample products, use the <code>insertMany</code> script provided in the project documentation. You will need the <code>_id</code> of a seller to assign the products to.</p>
        </li>
    </ol>

    <h3>Running the Application</h3>
    <p>You will need two terminals to run both the frontend and backend servers concurrently.</p>
    <ol>
        <li>
            <strong>Run the Backend Server (from the root <code>kartly</code> directory):</strong>
            <pre><code>npm run dev --prefix backend</code></pre>
            <p>The server will start on <code>http://localhost:5001</code>.</p>
        </li>
        <li>
            <strong>Run the Frontend Server (from the root <code>kartly</code> directory):</strong>
            <pre><code>npm start --prefix frontend</code></pre>
            <p>The React application will open in your browser at <code>http://localhost:3000</code>.</p>
        </li>
    </ol>

    <hr>

    <h2>Project Team</h2>
    <p>This project was developed as a group effort by:</p>
    <ul>
        <li><strong>[Person 1's Name]</strong> - <em>Backend & API Architect</em></li>
        <li><strong>[Person 2's Name]</strong> - <em>Frontend & UX Developer</em></li>
        <li><strong>[Your Name]</strong> - <em>State Management & Logic Integrator</em></li>
    </ul>

</body>
</html>
