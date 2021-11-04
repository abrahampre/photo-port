import react from 'react';
import {render, cleanup} from '@testing-library/react';
import  '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe ('About component', () =>{
    //first test
    it('renders', ()=>{
        render(<About/>);
    });

    // second test

    it('Matches snapshot Dom node structure',() =>{
        const {asFragment} = render (<About/>);

        expect(asFragment()).toMatchSnapshot();

    });
})