export class APIService {
    static getTasks() {
        return new Promise((resolve, reject) => {
            resolve([
                { content: "Code", dueDate: "2022-07-05", priority: 3 },
                { content: "Eat", dueDate: "2022-07-08", priority: 2 },
                { content: "Sleep", dueDate: "2022-03-10", priority: 1 },
            ]);
        });
    }
}