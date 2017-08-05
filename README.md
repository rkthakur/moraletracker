# moraletracker
This application is designed to capture morale of individuals in an organization and publish aggregated morale status. 
Steps to run this application:
1. Configure MongoDB connection point in ./config/db.js. I am using https://mlab.com hosted service for the demo.
2. Install node.js dependencies - "$npm install" commoand 
3. Start application - "$npm start"
4. There are three interaces
  a. Morale capture under root "/" - http://localhost:8088/
  b. Report "/report" - color coded visualization of Green, Yellow and Red Morale.
  c. Heatmap "/heatmap" - Rain drop heatmap repersenting Morale

Online demo : https://infinite-mountain-67206.herokuapp.com/
Reports :
a. https://infinite-mountain-67206.herokuapp.com/report
b. https://infinite-mountain-67206.herokuapp.com/heatmap
