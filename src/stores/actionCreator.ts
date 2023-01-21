import { action, WritableAtom } from "nanostores";

export function actionCreator<T, O>(
  atom: WritableAtom<T>,
  name: string,
  fn: (a: T, b?: O) => T
): any {
  return action(atom, name, (store, add) => store.set(fn(store.get(), add)));
}
