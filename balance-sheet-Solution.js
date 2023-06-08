function findMissingMonths(balanceSheetMonths) {

    // Find the minimum and maximum dates in the array
    const startDate = new Date(balanceSheetMonths.reduce((min, date) => (date < min ? date : min)));
    const endDate = new Date(balanceSheetMonths.reduce((max, date) => (date > max ? date : max)));

    const missingMonths = [];
    while (startDate < endDate) {

        // Increment Month 
        startDate.setUTCMonth(startDate.getUTCMonth() + 1);
        const yearMonth = startDate.toISOString().slice(0, 7);

        if ( !balanceSheetMonths.includes(yearMonth) ) {
            missingMonths.push(yearMonth);
        }
    }

    return missingMonths;


}

function calculateBalanceSheet(revenueData, expenseData) {
    // Create an object to store the monthly balances
    const balanceSheet = {};

    // Iterate through the revenue data and update the balances
    revenueData.forEach(revenueEntry => {
        const amount = revenueEntry.amount;
        const startDate = revenueEntry.startDate;
        const month = startDate.slice(0, 7); // Extract the year-month portion of the timestamp

        if ( !balanceSheet[month] ) {
            balanceSheet[month] = amount;
        } else {
            balanceSheet[month] += amount;
        }
    });

    // Iterate through the expense data and update the balances
    expenseData.forEach(expenseEntry => {
        const amount = expenseEntry.amount;
        const startDate = expenseEntry.startDate;
        const month = startDate.slice(0, 7); // Extract the year-month portion of the timestamp

        if ( !balanceSheet[month] ) {
            balanceSheet[month] = -amount;
        } else {
            balanceSheet[month] -= amount;
        }
    });

    const missingMonthsArray = findMissingMonths( Object.keys(balanceSheet) );

    // Set the missing months in the balance sheet with amount 0
    missingMonthsArray.map((month) => balanceSheet[month] = 0);

    // Convert the balance sheet object into an array of entries
    const balanceSheetEntries = Object.entries(balanceSheet).map(([startDate, amount]) => ({
        amount,
        startDate: startDate + '-01T00:00:00.000Z',
    }));

    // Sort the balance sheet entries by timestamp in ascending order
    balanceSheetEntries.sort((a, b) => a.startDate.localeCompare(b.startDate));

    return balanceSheetEntries;
}

const balanceSheet = calculateBalanceSheet(revenueData, expenseData);
console.log(balanceSheet);


// Example usage
const revenueData = [
    {
        amount: 60,
        startDate: "2020-03-01T00:00:00.000Z"
    },
    {
        amount: 0,
        startDate: "2020-02-01T00:00:00.000Z"
    },
    {
        amount: 10,
        startDate: "2020-03-01T00:00:00.000Z"
    },
    {
        amount: 40,
        startDate: "2020-01-01T00:00:00.000Z"
    }
];

const expenseData = [
    {
        amount: 20,
        startDate: "2020-05-01T00:00:00.000Z"
    },
    {
        amount: 30,
        startDate: "2020-03-01T00:00:00.000Z"
    }
];




