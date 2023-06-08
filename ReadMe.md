# Technical Assignment 
( I have attacted the summary of my Code - ` Please Review it ` )
Assignment to test fundamental knowledge for Prism Force. This can be written in any language or framework.


### Problem statement
Write a file which will take a json object containing the revenue and expense data of a company, and output its balance sheet month wise. The revenue and expense may be fixed or variable amounts payable in installments.

The program should output the answer/ balance sheet to the console. The balance for any month is the sum of all revenue for the month - sum of all expense for the month (`revenue.amount - expense.amount`). Sort the balancesheet in ascending order by timestamp.


#### Assumptions
- Amount will always be a valid positive number
- `startDate` will always be a valid ISO timestamp where the year and month may change. The day and time will remain constant
- Date entries may be missing for revenue or expense, assume the amount is 0


### Example
Two sample input files with their corresponding expected outputs have been provided for testing.

Look at `1-input.json` for the month of March. The `expense` is 30 while the revenue has 2 entries - amount of 60 and 10. The total balance for March is `60 + 10 - 30` which is `40` - visible in `1-output.json`.
Revenue and expenses may have multiple entries per month, may have missing data for which you can assume the `amount` is `0`. Their timestamps may not overlap. Eg. Revenue may be for Feb and March, while expenses has data for Jan, March and April - refer to `2-input.json` for further examples


### Sample data
2 set of files have been included where input is sample input data and output is the expected values.


-------------------------------------------------------------        ** SOLUTION  **            -------------------------------------------------------------------------


# SOLUTION 

The ` calculateBalanceSheet ` function takes in revenue data and expense data as input and calculates the monthly balances. 

###### calculateBalanceSheet:

- Initialize an empty ` balanceSheet ` object to store the monthly balances.
- Iterate through the revenue data and expense data arrays.
  - For each revenue entry, extract the month from the ` startDate ` and update the balance in the balanceSheet object by adding the revenue amount.
  - For each expense entry, extract the month from the ` startDate ` and update the balance in the balanceSheet object by subtracting the expense amount.
- Use the ` findMissingMonths ` function to identify any missing months in the balanceSheet object.
  - The findMissingMonths function finds the minimum and maximum dates in the balanceSheetMonths array.
- Set the missing months in the balanceSheet object with a balance of 0.
- Convert the ` balanceSheet ` object into an array of entries using ` Object.entries `.
- Sort the ` balanceSheetEntries ` array by the startDate property in ascending order using the ` sort() ` method and ` localeCompare() ` function.  
- Return the sorted ` balanceSheetEntries `  array.


### THANKYOU FOR CHECKING THE SOLUTION

