# Color saver 
A simple way to save fav colors.

features:
- adds a color to mangoo db
- retrieves added colors from mango db
- delete a color from mangoo db
- gives status codes of 200, 201, 400, 404, and 500
- a frontend paly ground is added to demonstrate visually. 

# to run locally:
- install the dependencies
- Create a .env file in the root directory and add your MongoDB Atlas connection string
- Open http://localhost:3000

# to see live
- uploaded to netlify safely (by hiding env file by Using netlify.toml)
- live on netlify: https://agent-6984d692e2f4087885580553--hyper-color-api.netlify.app/


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
- DELETE /api/colors/<a hex color, like #FF5733>
- GET /api/colors/random: Get 3 random colors.
        http://localhost:3000/api/colors/random


# Status Codes
        200: Success
        201: Created
        400: Missing hex
        404: No data
        500: Server error


Regards, Suruosh M.
