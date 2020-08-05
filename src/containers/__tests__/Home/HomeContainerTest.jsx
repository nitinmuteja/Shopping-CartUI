import React from 'react';
import { render } from '@testing-library/react';

import HomeContainer from "../../Home/HomeContainer";



describe('Home Component', () => {


    it('should match snapshot', () => {
        const { container } = render(<HomeContainer />);

        expect(container).toMatchSnapshot();
    });
});
