function countCategories(arr) {
 
  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return counts;
};

function countAndSortCategories(arr) {
  
  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])   
    .map(entry => entry[0]);      
  return sorted;
}
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));


console.log(countAndSortCategories(input));



