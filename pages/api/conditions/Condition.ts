export class Condition {

  label: String;

  constructor(label: String) {
    this.label = label;
  }

  toString() {
    return this.label;
  }
}

export const conditionConverter = {
  toFirestore: (condition: Condition) => {
    return {
      label: condition.label,
    };
  },
  fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
      const data = snapshot.data(options);
      return new Condition(data.label);
  }
}
