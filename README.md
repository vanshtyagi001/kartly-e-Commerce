<!DOCTYPE html>
<html lang="en">

<body>

  <h1>Kartly: A Full-Stack MERN E-Commerce Platform</h1>

  <p><em><!-- Optional screenshot --></em></p>

  <p><strong>Kartly</strong> is a fully-featured e-commerce marketplace built from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js). It demonstrates a complete, end-to-end application with rich features for both customers and sellers.</p>

  <h2>🚀 Live Demo</h2>
  <p><a href="#">[Link to your live deployed application]</a> <!-- Add your deployment link here --></p>

  <h2>✨ Key Features</h2>
  <ul>
    <li><strong>Complete Shopping Experience:</strong> Browse products, filter by category, view product details, add to cart, and complete the checkout flow.</li>
    <li><strong>Dual User Roles:</strong> Customers and Sellers with role-based access control.</li>
    <li><strong>Seller Dashboard:</strong> Manage product listings, including image uploads.</li>
    <li><strong>User Authentication:</strong> JWT-based login with bcryptjs password hashing.</li>
    <li><strong>Customer Profiles:</strong> View and manage user profiles and order history.</li>
    <li><strong>Order Management:</strong> Cancel pending orders and view incoming seller orders.</li>
    <li><strong>Responsive UI:</strong> Built with React and React-Bootstrap for a modern experience.</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, React-Bootstrap, React Router, Context API</li>
    <li><strong>Backend:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MongoDB with Mongoose</li>
    <li><strong>Authentication:</strong> JSON Web Tokens (JWT), bcryptjs</li>
    <li><strong>File Handling:</strong> Multer for image uploads</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <div class="folder-structure">
kartly/<br>
├── frontend/ <em># React App</em><br>
└── backend/ <em># Express API, Models, Controllers</em><br>
  └── uploads/ <em># Manually create this folder for image uploads</em>
  </div>

  <h2>⚙️ Getting Started</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js (with npm)</li>
    <li>MongoDB running locally</li>
  </ul>

  <h3>Installation & Setup</h3>
  <pre><code>git clone https://github.com/your-username/kartly.git
cd kartly</code></pre>

  <p><strong>Install Backend Dependencies:</strong></p>
  <pre><code>npm install --prefix backend</code></pre>

  <p><strong>Install Frontend Dependencies:</strong></p>
  <pre><code>npm install --prefix frontend</code></pre>

  <h3>Environment Variables</h3>
  <p>Create a <code>.env</code> file inside <code>/backend</code>:</p>
  <pre><code># /backend/.env
MONGO_URI=mongodb://127.0.0.1:27017/kartlyDB
JWT_SECRET=yourrandomjwtsecretkey</code></pre>

  <h3>Create the Uploads Folder</h3>
  <p>Inside the <code>/backend</code> folder, manually create a folder named <code>uploads</code>.</p>

  <h3>Seed the Database (Optional)</h3>
  <p>Use the provided <code>insertMany</code> script and a seller's <code>_id</code> to populate sample products via MongoDB Compass or <code>mongosh</code>.</p>

  <h2>🚦 Running the Application</h2>

  <h3>Start Backend Server:</h3>
  <pre><code>npm run dev --prefix backend</code></pre>
  <p>Runs on <a href="http://localhost:5001">http://localhost:5001</a></p>

  <h3>Start Frontend Server:</h3>
  <pre><code>npm start --prefix frontend</code></pre>
  <p>Opens at <a href="http://localhost:3000">http://localhost:3000</a></p>

  <h2>👨‍💻 Project Team</h2>
  <ul>
    <li><strong>[Person 1's Name]</strong> – Backend & API Architect</li>
    <li><strong>[Person 2's Name]</strong> – Frontend & UX Developer</li>
    <li><strong>[Your Name]</strong> – State Management & Logic Integrator</li>
  </ul>

  <hr>
  <p>© 2025 Kartly Project – All rights reserved.</p>

</body>
</html>
