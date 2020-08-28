import React from 'react';
import { create } from 'react-test-renderer';

function Button(props) {
    return <button>Nothing to do for now </button>;
}

describe('Button component', () => {
    Test('it shows the expected text when clicked (testing the wrong way!)', () => {
       const component = create(<Button text="hello everybody" />);
       const instance = component.getInstance();
       expect (instance.state.text).toBe("");
});