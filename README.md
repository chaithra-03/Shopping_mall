# Shop Owner Management System

## Introduction
The **Shop Owner Management System** is a web-based application designed to help manage shop owners within a shopping mall. This system enables users to add, update, delete, and view the details of shop owners, such as their name, date of birth, address, and associated shop ID. It is built with a **React** frontend and a **Spring Boot** backend, providing an intuitive interface and reliable API for easy management of shop owner data.

## Technologies Used
- **Frontend**: React, React Router, Axios
- **Backend**: Spring Boot
- **Database**: MySQL
- **Others**: JSON, HTTP methods (GET, POST, PUT, DELETE)

## Workflow
1. **Home Page**: 
   - The home page provides quick links to navigate between different actions like viewing all shops, updating a shop's details, or deleting a shop owner.
     
![Home Page Screenshot](https://github.com/chaithra-03/Shopping_mall/blob/backend-branch/Resources/home.png)
 

2. **All Shops**: 
   - Displays a list of all shop owners stored in the system, showing key information like ID, name, date of birth, address, and shop ID. This data is fetched from the backend via an API request using Axios.
     
  ![All Shops Screenshot](https://github.com/chaithra-03/Shopping_mall/blob/backend-branch/Resources/all.png)

3. **Add/Update Shop Owner**:
   - The user can add a new shop owner or update the details of an existing one using a form. The form takes input such as the owner's name, date of birth, address, and shop ID.
   - Once the user submits the form, the data is sent to the backend through a POST or PUT API request.
     
![Add Shop Owner Screenshot](https://github.com/chaithra-03/Shopping_mall/blob/backend-branch/Resources/update.png)

4. **Delete Shop Owner**: 
   - Users can delete a shop owner from the system. Upon clicking the delete button, a DELETE request is made to remove the specific shop owner's details from the database.
     
![Delete Shop Owner Screenshot](https://github.com/chaithra-03/Shopping_mall/blob/backend-branch/Resources/delete.png)

5. **About Page**: 
   - Provides information about the system and its purpose, outlining the benefits of the Shop Owner Management System.

## Result
- A fully functional shopping mall management system that allows users to:
   - View a list of all shop owners.
   - Add, update, and delete shop owner details.
   - Easily navigate between different features of the system using a clean and responsive user interface.
- The application enables efficient management of shop owners and helps optimize the overall experience for both shop owners and mall administrators.
