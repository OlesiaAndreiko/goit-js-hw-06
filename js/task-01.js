const menuByCategories = document.querySelectorAll('.item');
console.log("Number of categories:", menuByCategories.length);


const category = document.querySelectorAll('h2')
.forEach((item) => 
console.log(`Category: ${item.innerHTML} \nElements: ${item.nextElementSibling.children.length}`)
)

