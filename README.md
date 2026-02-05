# Color saver 
A simple way to save fav colors.

features:
adds a color to mangoo db
retrieves added colors from mango db
gives status codes of 200, 201, 400, 404, and 500
+ a frontend paly ground is added to demonstrate visually. 

# to run locally:
- install the dependencies
- Create a .env file in the root directory and add your MongoDB Atlas connection string
- Open http://localhost:3000


# API eendpoints
- POST /api/colors: Save a hex (e.g., {"hex": "#FF0000"})
        Using Postman, Create a new POST request:
        URL: http://localhost:3000/api/colors
        Body → raw → JSON:
        {
        "hex": "#FF0000"
        }

- GET /api/colors: List all saved colors.
        http://localhost:3000/api/colors
- GET /api/colors/random: Get 3 random colors.
        http://localhost:3000/api/colors/random


# Status Codes
        200: Success
        201: Created
        400: Missing hex
        404: No data
        500: Server error


Regards, Suruosh M.
