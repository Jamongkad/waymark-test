export interface Note {
  id: string
  text: string
  tags: Condition[]
}

export interface Condition {
  id: string
  name: string
}
