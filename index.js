const monthlyBill = [100, 200, 300, 400]

monthlyBill.forEach((bill, billIndex, arrayElement ) => {

    const month = ['January', 'February', 'March', 'April']

        month.forEach((monthElement, monthIndex, monthArray) => {
            if (monthIndex == billIndex) {
                console.log(monthElement + "'s bill is " + " " + bill);
            }
        })

});

