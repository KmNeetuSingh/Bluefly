# **BellaVita** ✨🌿  
Your ultimate destination for natural beauty, skincare, and wellness products! BellaVita brings you the best of organic living with a seamless shopping experience, secure transactions, and a vibrant community.  

---

## **Features** 🚀  

### **1. Authentication & Authorization 🔐**  
- **JWTs for Secure Login:** Secure your account with **JSON Web Tokens (JWTs)**.  
  - Tokens are stored safely as HTTP-only cookies (security first!).  
- **Role-based Access:**  
  - Regular users shop 🛒, admins manage the backend 👑.  

### **2. Frontend Magic 🪄**  
- **Dynamic Routing with React Router:** Smooth navigation between login, cart, and product pages.  
- **State Management with Redux Toolkit:** Handles user sessions, cart updates, and loading states seamlessly.  
- **Modern UI with Chakra UI:** Responsive, accessible, and stunning design.  
- **Real-Time Loading States:** Keeps the user experience engaging and smooth.  
- **Reusable Components:** Scalable React components for faster development.  

### **3. Cart That Gets You 🛒**  
- Add, remove, or update items with a click.  
- Cart info synced in real-time using **Redux Toolkit**.  
- Persistent storage to keep your cart even after refresh.  

### **4. Backend Hosted on Render 🌐**  
- The backend is served via **Render**—fast, secure, and reliable.  

### **5. Smooth UX/UI 🎨**  
- Styled with **Chakra UI** for a modern, clean look.  
- Loading transitions handled seamlessly with **Redux**.  

---

## **Tech Stack** 💻  

### **Frontend**  
- **React.js** for a fast, reactive experience.  
- **Redux Toolkit** for efficient state management.  
- **Chakra UI** for beautiful and accessible design.  
- **React Router** for seamless navigation.  

### **Backend**  
- **Node.js + Express.js** for powerful API endpoints.  
- **MongoDB** for secure data storage.  
- **JWTs** for secure authentication.  
- **bcrypt** for password encryption.  

---

## **Frontend Overview** 🎨  

### **Pages**  
1. **Home Page:**  
   - Showcases featured products and categories.  
   - Dynamic cards for each product with key details.  

2. **Login/Signup Pages:**  
   - Secure authentication with JWTs.  

3. **Cart Page:**  
   - Displays items in the cart with real-time updates.  
   - Supports item removal, quantity adjustments, and checkout previews.  

4. **404 Page:**  
   - Friendly error page with navigation options.  

---

### **Core Features of Frontend** 🌟  
- **Redux Toolkit Integration:**  
  - Manages global states like user sessions, cart items, and loading indicators.  
- **Responsive UI with Chakra UI:**  
  - Custom themes for consistency across pages.  
  - Mobile-first design for all devices.  
- **React Router:**  
  - Smooth navigation between pages:  
    - `/`: Home  
    - `/login`: Login  
    - `/cart`: Cart  
- **Loading States:**  
  - Engaging shimmer effects while data loads.  
- **Reusable Components:**  
  - **Product Cards:** For displaying items.  
  - **Form Components:** Modular input fields for user authentication.  

---

## **Backend Overview** ⚙️  

### **Authentication Flow** 🔓  
1. **Signup & Login:**  
   - Secure account creation with hashed passwords using **bcrypt**.  
   - JWT tokens for safe login sessions.  
2. **Protected Routes:**  
   - Cart, orders, and personal data are protected.  
3. **Role-based Authorization:**  
   - Admins manage products and content.  

### **Cart Management** 🛒  
- Items stored in MongoDB and synced with the frontend.  
- Data integrity ensured with robust validation.  

---

## **API Endpoints** 🎯  

### **Authentication**  
- `POST /auth/signup`: Create a new account.  
- `POST /auth/login`: Secure login.  
- `GET /auth/logout`: Log out safely.  

### **Cart Routes**  
- `GET /cart`: Get user’s cart.  
- `POST /cart`: Add items to the cart.  
- `PUT /cart/:id`: Update cart items.  
- `DELETE /cart/:id`: Remove items from the cart.  

### **Products**  
- `GET /products`: Fetch all products.  
- `GET /products/:id`: Get product details.  

---

## **Coming Soon** 🔮  
✨ **Google Authentication**: Login with your Google account.  
✨ **Payment Integration**: Checkout with ease.  
✨ **Admin Dashboard**: Manage store activities effortlessly.  
✨ **Wishlist Feature**: Save products for later.  

---

## **How to Run Locally** 🌈  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/bellavita.git
   cd bellavita
   ```

2. Install dependencies:  
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Add your environment variables:  
   Create a `.env` file in the root:  
   ```env
   PORT=5000
   MONGO_URL=<Your MongoDB URL>
   JWT_SECRET=<Your Secret Key>
   ```

4. Run the project:  
   ```bash
   npm run dev
   ```

5. Visit:  
   [http://localhost:4000](http://localhost:3000)  

---

## **Deployment** 🌍  
- **Frontend:** Hosted on **Vercel** for optimal performance.  
- **Backend:** Deployed on **Render** for stability and speed.  
