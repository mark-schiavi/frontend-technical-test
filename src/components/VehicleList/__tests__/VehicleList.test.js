import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import VehicleList from "../VehicleList";
import vehiclesReducer from "../../../store/vehiclesSlice";
import useData from "../useData";

jest.mock("../useData");

const createMockStore = (state) => {
    return configureStore({
        reducer: {
            vehicles: vehiclesReducer,
        },
        preloadedState: {
            vehicles: state,
        },
    });
};

beforeEach(() => {
    useData.mockImplementation(() => {});
});

describe("<VehicleList /> Tests", () => {
    it("Should show loading state if it not falsy", () => {
        const store = createMockStore({
            vehicles: [],
            selectedVehicle: null,
            loading: true,
            error: null,
        });
        const { queryByTestId } = render(
            <Provider store={store}>
                <VehicleList />
            </Provider>
        );

        expect(queryByTestId("loading")).not.toBeNull();
        expect(queryByTestId("error")).toBeNull();
        expect(queryByTestId("results")).toBeNull();
    });

    it("Should show error if it is not falsy and loading is finished", () => {
        const store = createMockStore({
            vehicles: [],
            selectedVehicle: null,
            loading: false,
            error: "An error occurred",
        });
        const { queryByTestId } = render(
            <Provider store={store}>
                <VehicleList />
            </Provider>
        );

        expect(queryByTestId("loading")).toBeNull();
        expect(queryByTestId("error")).not.toBeNull();
        expect(queryByTestId("results")).toBeNull();
    });

    it("Should show results if loading successfully finished", () => {
        const store = createMockStore({
            vehicles: [],
            selectedVehicle: null,
            loading: false,
            error: null,
        });
        const { queryByTestId } = render(
            <Provider store={store}>
                <VehicleList />
            </Provider>
        );

        expect(queryByTestId("loading")).toBeNull();
        expect(queryByTestId("error")).toBeNull();
        expect(queryByTestId("results")).not.toBeNull();
    });
});
