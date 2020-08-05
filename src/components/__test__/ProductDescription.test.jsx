import React from 'react';
import { render } from '@testing-library/react';
import ProductDescription from "../ProductDescription";




describe('Product Description Component tests', () => {


    it('should match snapshot', () => {
        const { container } = render(<ProductDescription/>);

        expect(container).toMatchSnapshot();
    });

});
