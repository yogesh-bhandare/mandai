# Mandai: Empowering Farmers and Traders

### Overview

Mandai is a mobile app connecting farmers, vendors, and restaurants, enabling seamless trade of bulk commodities. It provides real-time market price updates, ensuring fair deals and eliminating exploitation by middlemen. Farmers can directly sell their produce to restaurants or vendors, maximizing profits, while restaurants benefit from transparent pricing and streamlined order management.

### Motivation

The lack of transparency in agricultural trading leads to unfair pricing and reduced profits for farmers. Mandai empowers farmers, ensures fair market deals, and simplifies supply chain management for all stakeholders, fostering trust and efficiency.

![Mandai Demo](assets/demo.gif) 

### Features
   - **Live Price Updates:** Stay informed about current market rates.
   - **Direct Marketplace:** Farmers can post and sell directly to restaurants or vendors.
   - **Order & Payment Management:** Simplifies bulk trading for restaurants.
   - **Notifications:** Alerts for price changes, orders, and listings.

### Tech Stack
- [Django Backend](https://github.com/yogesh-bhandare/mandai-backend-api) (Python)

   - **Market Data Scraping:** Uses Celery and Redis to scrape real-time commodity prices from- trusted market sources and update the app dynamically.
   - **APIs for Trading and Orders:** Handles commodity listings, direct trade operations, and- order processing.
   - **Storage:** Integrates with AWS S3 for securely storing images and files related to- commodity posts.
   - **Authentication:** Implements Twilio for OTP-based user login and verification.

- React Native Frontend

   - **Real-Time Market Rates:** Displays live commodity prices fetched from the backend.
   - **Marketplace Features:** Provides intuitive interfaces for posting, browsing, and buying- commodities.
   - **Order & Payment Management:** Allows restaurants and vendors to efficiently manage bulk- orders and track payments.
   - **User Interface:** Built with Tailwind CSS for a modern, responsive design.

 - Additional Features

   - **PostgreSQL Database (Neon DB):** Ensures reliable and efficient data storage and- retrieval.
   - **Deployment & Scalability:** Uses Docker for containerized deployment and GitHub Actions- for automated CI/CD pipelines.

## Running App

You can download and use the Mandai app to explore its features and functionality. Click the link below to download the app or scan qr:

[Download Mandai App](https://github.com/yogesh-bhandare/mandai-backend-api)

![Scan to Download](assets/apkqr.png)