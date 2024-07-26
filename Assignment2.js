class Person {
    constructor(name, age, salary, sex) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sex = sex;
    }

    static sort(array, field, order = 'asc') {
        const newArray = [...array]; 
        function quickSort(arr, left, right) {
            if (left < right) {
                const pivotIndex = partition(arr, left, right);
                quickSort(arr, left, pivotIndex - 1);
                quickSort(arr, pivotIndex + 1, right);
            }
            return arr;
        }

        function partition(arr, left, right) {
            const pivotValue = arr[right][field];
            let i = left;

            for (let j = left; j < right; j++) {
                if ((order === 'asc' && arr[j][field] < pivotValue) ||
                    (order === 'desc' && arr[j][field] > pivotValue)) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];  
                    i++;
                }
            }
            [arr[i], arr[right]] = [arr[right], arr[i]]; 
            return i;
        }

        return quickSort(newArray, 0, newArray.length - 1);
    }
}

const persons = [
    new Person('Ravi', 30, 50000, 'male'),
    new Person('Shashi', 25, 60000, 'male'),
    new Person('Aman', 28, 65000, 'male'),
    new Person('Poonam', 35, 70000, 'female'),
];

console.log('Sorted by name ascending:');
console.log(Person.sort(persons, 'name', 'asc'));

