

<h1 style="text-align: center;"> Agave Lab - Challenge </h1>


**Testing:** Mocha, chai, sinon, superagent/axios, Requirements unit and functional/e2e test.<br/>  **API:** Express y passport.js (authentication is not required but is a plus).<br/>
**Database:** Sequelize with Postgresql.<br/>
**Plus:** Docker setup.

_We run a physical store which sells (only) 3 products:_



|Code         | Name         |  Price
|-------------|:------------:|-------:
|PANTS        | Pants        |   $5.00
|TSHIRT       | T-Shirt      |  $20.00
|HAT          | Hat          |   $7.50


_Various departments have insisted on the following discounts:_

- The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on PANTS items.

- The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more TSHIRT items, the price per unit should be $19.00.

_The checkout process allows for items to be scanned in any order, and should return the total amount to be paid._

<h4>Examples:</h4>


Items: PANTS, TSHIRT, HAT
Total: $42.50

Items: PANTS, TSHIRT, PANTS
Total: $25.00

Items: TSHIRT, TSHIRT, TSHIRT, PANTS, TSHIRT
Total: $81.00

Items: PANTS, TSHIRT, PANTS, PANTS, HAT, TSHIRT, TSHIRT
Total: $74.50


<h4>INSTRUCTIONS:</h4>

_Implement a basic API for our store._
