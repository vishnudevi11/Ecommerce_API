# Ecommerce_API
Created E-commerce API made using NodeJS & MongoDB.

**Tech Stack:**
* NodeJS
* MongoDB

**Steps to use the API:**
* Start the server using **node app.js**
* Open **postman**
* Make a GET request on http://localhost:5000/products
* Products should be visible

**Steps to create a new product:**
* Start the server using **node app.js**
* Open **postman**
* Enter url as http://localhost:5000/products/create and make a **POST** request
* Select body tab below the url and then select **x-www-form-urlencoded** or **raw(JSON)**
* Add name and quantity as keys and set the desired values for the keys.
* You will recieve the message saying new **"product created successfully"** then you have done everything correct
* The product is created. Check it out by making a **GET** request at http://localhost:5000/products

**Steps to Delete the product:**
* Copy the **ObjectId** of the product you want to delete
* Add the **ObjectId** after the http://localhost:5000/products/ and make a **DELETE** request
* You will receive the message **"Deleted Successfully"**

**Steps to Update the quantity of the product:**
* Copy the **ObjectId** of the product whose quantity you want to update
* Add the **ObjectId** after the http://localhost:5000/products/ and add update_quantity/?number={x} in the url,which x is a
  number you want increase or decrease the quantity
* The url should be look like localhost:5000/products/{ObjectId}/update_quantity/?number={x}
* Make a **POST** request and you should get a message containing the update product
