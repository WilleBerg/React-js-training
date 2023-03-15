import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello partent ${childName}`);
    }
    return < ChildComponent greetHandler = { greetParent }/>
}
