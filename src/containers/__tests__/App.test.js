import React from 'react';
import App from '../App';
import {shallow} from "enzyme";

describe('App', () => {

    const mockData = (data) => {

        const mockJsonPromise = Promise.resolve(data); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });

        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    };
    it('should fetch application name on #componentDidMount', () => {

        mockData({"name": "ApplicationName"})

        let mountedApp = shallow(<App/>);

        return mountedApp.instance().componentDidMount().then(() => {
            expect(global.fetch).toHaveBeenCalledWith("http://localhost:8080/application")
        })
    });
});
