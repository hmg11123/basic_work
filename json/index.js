const students = [
    {
        name: "오민형",
        gander: "m",
        age: 18,
        grade: 2,
        printHandler: () => {
            console.log(`오민형은 18세 입니다`)
        }
    },
    {
        name: "방효진",
        gander: "fm",
        age: 18,
        grade: 2,
        printHandler: () => {
            console.log(`방효진은 18세 입니다`)
        }
    }
]

console.log(students);

students[0].printHandler();
students[1].printHandler();

