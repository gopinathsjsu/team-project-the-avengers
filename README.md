# team-project-the-avengers
team-project-the-avengers created by GitHub Classroom

## Diagrams
### Use Case Diagram
![](documents/UseCaseDiagram.png)

### Architecture Diagram
![](documents/ArchitectureDiagram.jpeg)

### Class Diagram
![](documents/ClassDiagram.jpeg)

## Feature Set
Users are able to:
- Enroll as a new customer
- Manage rewards points
- Search for hotels
- Book a room for stay up to 1 week
- Edit reservations
- Cancel reservations

Admins are able to:
- Add a new location
- Edit a location information
- Delete a location
- Edit number of rooms for each location
- Edit prices of each type of rooms
- Edit amenities prices
- Set weekend rates
- Set festive period and their corresponding rates

## Burndown Chart
![](documents/BurndownChart.png)

## Requirements
- Node

## Steps to run locally
1. Navigate to web_ui directory:
```
cd Source/web_ui
```

2. Install dependencies:
```
npm install
```

3. Build frontend:
```
npm run-script build
```

4. Navigate to io_server directory:
```
cd Source/io_server
```

5. Install dependencies:
```
npm install
```

6. Start server:
```
npm start
```

7. Open the application on a web browser: http://localhost:3000/
