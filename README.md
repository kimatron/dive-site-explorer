# Dive Site Explorer

Dive Site Explorer is a web application that allows scuba diving enthusiasts to discover, explore, and track dive sites around the world. Built with Vue.js and Vuex, this application provides an interactive map, detailed dive site information, and personalized features for divers.

## Features

### Current Features
- Interactive world map with dive site markers
- Detailed information for each dive site
- Ability to favorite dive sites
- Search and filter dive sites by various criteria
- Responsive design for desktop and mobile devices

### Planned Future Features
- User authentication and profiles
- Dive log functionality to record personal dives
- Social features: share dive experiences and photos
- Integration with weather APIs for real-time conditions
- Dive site reviews and ratings system
- Underwater species identification guide
- Dive gear maintenance tracker
- Dive trip planner with itinerary suggestions
- Integration with dive certification agencies for verification
- Augmented reality dive site previews

## User Stories

As a user, I want to:

1. View an interactive map of dive sites around the world
2. See detailed information about each dive site, including depth, difficulty, and marine life
3. Mark dive sites as favorites for easy access later
4. Search for dive sites by name or location
5. Filter dive sites by difficulty level
6. View a list of all dive sites
7. See a separate list of my favorite dive sites
8. Get recommendations for dive sites based on my preferences and experience level
9. Log my dives with details such as depth, duration, and observations
10. Connect with other divers and share experiences
11. Check current and forecasted weather conditions for dive sites
12. Plan future dive trips with suggested itineraries
13. Track my dive gear maintenance schedule
14. Identify marine species I encounter during dives
15. Verify and display my dive certifications on my profile

## Detailed Feature Descriptions

### Interactive Map
The interactive map uses Leaflet.js to display dive sites around the world. Users can zoom, pan, and click on markers to view basic information about each site. The map also features clustering for areas with many dive sites to improve performance and usability.

### Dive Site Details
Each dive site has a detailed view that includes:
- Site name and location
- Maximum and average depths
- Difficulty level
- Best time to visit
- Type of dive (e.g., reef, wreck, cave)
- Notable marine life
- Required certification level
- Nearby dive shops and facilities

### Favoriting System
Users can mark dive sites as favorites, which are then easily accessible from their profile. This feature will be expanded in the future to include personalized notes and reminders for each favorited site.

### Search and Filter
The application includes a robust search system that allows users to find dive sites by name, location, or features. Filters can be applied to narrow results by difficulty, depth range, certification requirements, and more.

## Technologies Used

- Vue.js 3 for the frontend framework
- Vuex 4 for state management
- Vue Router for navigation
- Leaflet for interactive maps
- SCSS for styling
- Axios for API requests
- Jest for unit testing

## Project Setup


# Clone the repository
```bash git clone https://github.com/yourusername/dive-site-explorer.git
cd dive-site-explorer
```
### Install dependencies
```
npm install
```
### Serve with hot reload at localhost:8080
```
npm run serve
```
### Compile and minify for production
```
npm run build
```
### Run tests
```
npm run test
```
# Project Structure
```
Copydive-site-explorer/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DiveSiteDetail.vue
│   │   ├── DiveSiteList.vue
│   │   ├── DiveSiteMap.vue
│   │   └── FavoriteDiveSites.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── styles/
│   │   └── variables.scss
│   ├── App.vue
│   └── main.js
│
├── tests/
│
├── .gitignore
├── babel.config.js
├── package.json
├── README.md
└── vue.config.js
```

## Contributing

Contributions to the Dive Site Explorer project are welcome! Here's how you can contribute:

- **Fork the repository**
  - Create a new branch (git checkout -b feature/AmazingFeature)

- **Make your changes**

  - Commit your changes (git commit -m 'Add some AmazingFeature')

- **Push to the branch** 

  - (git push origin feature/AmazingFeature)

- **Open a Pull Request**

Please ensure your code adheres to the existing style and that all tests pass before submitting a pull request.

## License
This project is open source and available under the MIT License.
## Contact
For any questions, concerns, or feature requests, please open an issue on the GitHub repository or contact the maintainer at[kim@kimatron.tech].