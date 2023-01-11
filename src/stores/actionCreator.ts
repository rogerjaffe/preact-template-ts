import {action, WritableAtom} from "nanostores";

export function actionCreator<T>(
  atom: WritableAtom<T>,
  name: string,
  fn: (a: T, b: T) => T
): any {
  return action(atom, name, (store, add) => store.set(fn(store.get(), add)));
}
