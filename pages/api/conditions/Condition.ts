export class Condition {

  name: String;

  constructor(name: String) {
    this.name = name;
  }

  toString() {
    return this.name;
  }
}

export const conditionConverter = {
  toFirestore: (condition: Condition) => {
    return {
      name: condition.name,
    };
  },
  fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
      const data = snapshot.data(options);
      return new Condition(data.name);
  }
}
