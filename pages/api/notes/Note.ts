export type ConditionObject = {
  id: String,
  name: String
}

export class Note {
  text: String;
  tags: [ConditionObject];

  constructor(text: String, tags: [ConditionObject]) {
    this.text = text;
    this.tags = tags;
  }

  toString() {
    return this.text;
  }
}

export const noteConverter = {
  toFirestore: (note: Note) => {
    return {
      text: note.text,
      tags: note.tags
    };
  },
  fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
    const data = snapshot.data(options);
    return new Note(data.text, data.tags);
  }
}