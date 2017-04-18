# Checkout Kata

## Setup
- Clone this repository - please don't fork it!
- Run `npm install`

## Workflow
- Treat this like a real piece of work, but only spend an hour or two on it - it doesn't matter how far you get
- Commit your work frequently
- Use your finest functional programming
- Feel free to use any npm modules and/or npm tasks
- It must work in Node.js v6
- Add your own `README` if necessary

## Instructions
You should implement a supermarket checkout which:
- has an asynchronous interface (even if the implementation is synchronous)
- always accepts a string of items and gives back the total price
- discounts any offers from the total price

Use the following pricing information:

| Item  | Price | Offer     |
| :---: | :---: | :---:     |
| A     | 50    | 3 for 130 |
| B     | 30    | 2 for 45  |
| C     | 20    | N/A       |
| D     | 15    | N/A       |

For example:
- `'DABA'` gives `145`
- `'BBBB'` gives `90`
