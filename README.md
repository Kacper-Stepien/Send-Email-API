# Simple Email Sending API

This project provides a simple API that enables sending emails from other applications, such as a contact form on a personal website. It's built using Node.js and Express, and leverages Nodemailer for email functionality.

## Features

- Send emails with a simple POST request.
- Configurable through environment variables.
- Uses Gmail SMTP by default but can be configured for other email services.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. **Clone the repository**

        git clone https://github.com/Kacper-Stepien/Send-Email-API.git
        cd Send-Email-API

3. **Install dependencies**

        npm install

4. **Set up environment variables**
Configure config.env file to your needs

        EMAIL_USER=your-email@gmail.com
        EMAIL_PASSWORD=your-app-password
        SERVICE=gmail
        HOST=smtp.gmail.com
        PORT=587

6. **Running the server**

        npm start

### Usage
To send an email, make a POST request to the /send-email endpoint with the following JSON payload:

        {
          "name": "Sender's Name",
          "surname": "Sender's Surname",
          "message": "Your message here",
          "recipient": "recipient-email@gmail.com",
          "sender": "Your Name or Alias"
        }
        
### Customization
This API serves as a foundational tool that you can customize and extend according to your specific needs. Feel free to adapt or expand the existing endpoints, integrate additional services, or modify the email functionality to suit different use cases.
