# datenite

Make date nite fun

## Instructions to Run the App

1. Install Go: Make sure you have Go installed on your machine. You can download it from golang.org.

2. Create Project Directory: Create a new directory and place all the files accordingly as shown in the project structure.

3. Run the Server:

bash
go run main.go
Access the App: Open your web browser and go to http://localhost:8080

## Additional Notes

- Simulated Data: Since we don't have actual API keys, the app uses simulated data for suggestions and options. You can replace these with real API calls when you have the keys.

- User Authentication: The current setup includes basic login and registration forms but doesn't implement actual authentication logic.

- Design and Styling: The app uses a simple CSS styling that aligns with the Copilot app color scheme, featuring dark backgrounds and blue accents for a modern look.

- Responsive Design: The app is designed to be mobile-friendly, ensuring a good user experience on various screen sizes.

## TODO

- User Authentication: For a real application, we'd need to handle user sessions, password hashing, and database storage.
- API Integration:
  - Restaurants and Deals: Integrate with the Yelp API or Google Places API to fetch real-time restaurant data.
  - Events: Use the Eventbrite API or similar to get local events.
  - Coupons: Fetch deals from Groupon or RetailMeNot APIs.

- User Profiles:
  - Save user preferences, favorite spots, and past date ideas.
  - Implement secure authentication and authorization.

- Push Notifications:
  - Send reminders for booked events or new deals in the area.

- Donations and Monetization:
  - Include a donation button using services like PayPal or Stripe.
  - Consider affordable hosting options like Heroku or Netlify for deployment.
