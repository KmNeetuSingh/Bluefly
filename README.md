# **BlueFly** 🌀🌿

Your go-to destination for clean, conscious, and cool shopping! BlueFly merges natural beauty, smart tech, and sleek design for a next-gen eCommerce experience.

---

## **Features** ⚡

### **1. Authentication & Authorization 🔐**

* **JWT-Powered Logins:** Rock-solid security with **JSON Web Tokens**, stored as **HTTP-only cookies** (no data leaks here).
* **Role-Based Vibes:**

  * Shoppers explore freely 🛒
  * Admins run the show like pros 👑

### **2. Frontend That Flies 🧠**

* **React Router for Navigation:** Glide through login, cart, and product pages with zero lag.
* **Redux Toolkit State Magic:** From user sessions to cart actions—it's smooth, fast, and reactive.
* **Chakra UI Styling:** Clean, minimal, and mobile-first.
* **Loading That Feels Alive:** Dynamic states keep users engaged.
* **Component Reusability:** Build once, scale forever 💡

### **3. Smart Cart System 🛒**

* Add, remove, update—your cart, your way.
* Real-time sync with **Redux Toolkit**.
* Persistent cart data, even after refresh.

### **4. Hosted with Power 🌐**

* **Render** backs the backend—secure and lightning-fast.

### **5. Aesthetic Meets Function 🎨**

* Chakra UI makes sure it’s 🔥 on every screen.
* Seamless transitions via **Redux** loading states.

---

## **Tech Stack** 👩‍💻👨‍💻

### **Frontend**

* **React.js**
* **Redux Toolkit**
* **Chakra UI**
* **React Router**

### **Backend**

* **Node.js + Express.js**
* **MongoDB**
* **JWT**
* **bcrypt**

---

## **Frontend Breakdown** 🎨

### **Main Pages**

1. **Home:**

   * Product cards with details & categories.
2. **Login/Signup:**

   * Auth powered by JWT.
3. **Cart:**

   * Real-time updates & quantity controls.
4. **404 Page:**

   * Friendly fallback with nav links.

---

### **Key Frontend Features** 🌈

* **Redux Toolkit:**

  * Manages global state like a pro.
* **Chakra UI:**

  * Theming, accessibility, responsiveness = ✅
* **React Router:**

  * Route breakdown:

    * `/`: Home
    * `/login`: Login
    * `/cart`: Cart
* **Shimmer Loading Effects:**

  * Keeps it alive while fetching data.
* **Reusable Components:**

  * **ProductCard**, **FormInputs**, etc.

---

## **Backend Breakdown** ⚙️

### **Auth Flow**

* **bcrypt** for password hashing 🔒
* JWT for session control
* Protected routes for personal data
* Admins can add/manage products

### **Cart Engine** 🛒

* MongoDB-powered cart storage
* CRUD operations with full validation

---

## **API Endpoints** 🔗

### **Auth**

* `POST /auth/signup`
* `POST /auth/login`
* `GET /auth/logout`

### **Cart**

* `GET /cart`
* `POST /cart`
* `PUT /cart/:id`
* `DELETE /cart/:id`

### **Products**

* `GET /products`
* `GET /products/:id`

---

## **Upcoming Drops** 🔮

* 🔐 Google OAuth Login
* 💳 Payment Gateway Integration
* 🛠️ Admin Dashboard
* ❤️ Wishlist System

---

## **Getting Started Locally** 🧑‍💻

1. **Clone It:**

   ```bash
   git clone https://github.com/yourusername/bluefly.git
   cd bluefly
   ```

2. **Install Everything:**

   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. **Set Your `.env`:**

   ```env
   PORT=5000
   MONGO_URL=<Your MongoDB URL>
   JWT_SECRET=<Your JWT Secret>
   ```

4. **Run It:**

   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   [http://localhost:3000](http://localhost:3000)

---

## **Deployments** 🚀

* **Frontend:** Deployed on **Vercel**
* **Backend:** Running on **Render**

