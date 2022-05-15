import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);

        if (category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = filteredCategories.reduce((prev, curr) => {
        prev.push({
            label: curr.type,
            value: curr.amount,
            color: curr.color
        })
        return prev;
    }, [])

    const reactDonutChartBackgroundColor = filteredCategories.map((c) => c.color);

// const chartData = {
//     datasets: [{
//       data: filteredCategories.map((c) => c.amount),
//       backgroundColor: filteredCategories.map((c) => c.color),
//       labels: filteredCategories.map((c) => c.type),
//     }]
    
//   };

return { total, chartData, reactDonutChartBackgroundColor }
}

export default useTransactions;