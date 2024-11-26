### E-Commerce Platform

**Project Description:**  
This is a feature-rich, role-based e-commerce platform designed to simulate a real-world online shopping experience. The platform includes functionalities for browsing products, managing a shopping cart, and placing orders. It also features role-based access control, allowing specific actions for users, admins, and guests.

Admins can manage products, view orders, and access sales analytics, while users can place orders, view their order history, and manage their profile. Guests can browse products but must log in or register to access advanced features like checkout.

---

### **Roles and Their Functionality**  

#### **User Role Functionality**  

1. Browse products with search and filtering options. 
2. View detailed product pages.
3. Add products to a cart and proceed to checkout.  
4. Access order history. 
5. Update profile information (email, password, etc.). 

---

#### **Admin Role Functionality**  
  
1. Add, update, or delete products in the catalog.
2. View all user orders in a structured table.
3. Analyze sales trends using data visualizations (e.g., sales charts).
4. Manage the platform through a dedicated admin dashboard.


---

#### **Guest Role Functionality**  

1. Browse the platform and view product details.
2. Limited access; cannot add to cart or place orders without logging in.  

---

### **Platform Features by Role**  

| Feature                         | Guest         | User                  | Admin               |
|---------------------------------|---------------|-----------------------|---------------------|
| Browse Products                 | View Only     | View and Add to Cart  | View and Manage Listings |
| View Product Details            | Read Only     | Read Only             | Read and Update     |
| Add to Cart                     | Not Allowed   | Allowed               | Not Applicable      |
| Checkout & Place Orders         | Not Allowed   | Allowed               | Not Applicable      |
| View Order History              | Not Allowed   | View Personal Orders  | View All User Orders |
| Update Profile Information      | Not Allowed   | Update Profile        | Not Applicable      |
| Add New Products                | Not Applicable| Not Applicable        | Allowed             |
| Edit Existing Products          | Not Applicable| Not Applicable        | Allowed             |
| Delete Products                 | Not Applicable| Not Applicable        | Allowed             |
| View All Orders                 | Not Applicable| Not Applicable        | Allowed             |
| Access Sales Analytics          | Not Applicable| Not Applicable        | Access Sales Data   |
| Role-Based Login                | Not Applicable| Login as User         | Login as Admin      |
| Admin Dashboard Access          | Not Applicable| Not Applicable        | Full Access         |

---

### **Technical Architecture Overview**  

**Frontend:**  
- HTML: Base structure for the application.
- React.js: Component-based framework for building a dynamic UI.
- Redux: Global state management for seamless data flow.
- React Router: Navigation and routing between pages.
- Tailwind CSS: Utility-first CSS framework for responsive design.
- Backend Simulation:
- Static JSON: For product and user data.
- Mock APIs: Using json-server for simulating CRUD operations.


**Additional Libraries:**  
- Fetch API: For handling API requests.
