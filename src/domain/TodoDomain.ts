export type TodoItemValue = {
  readonly state: boolean;
  readonly value: string;
  readonly id: string;
};

export type TodoItemsDomain = TodoItemValue[];
