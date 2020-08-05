import AppName from "../AppName"
import {shallow} from "enzyme";
import React from "react";

describe("App Name", () => {
    it("Should render AppName without crashing", () => {
        shallow(<AppName/>)
    })

    it("should render application name as Shopping Cart", () => {
        let expectedName = "Shopping Cart";
        let appNameComponent = shallow(<AppName name={expectedName}/>);
        let appName = appNameComponent.find("div");
        expect(appName.text()).toBe(expectedName)
    })
})
