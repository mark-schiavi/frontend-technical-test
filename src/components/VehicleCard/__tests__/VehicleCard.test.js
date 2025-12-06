import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import VehicleCard from "../VehicleCard";
import vehiclesReducer from "../../../store/vehiclesSlice";
import { mockVehicle } from "../../../__mocks__/vehicleMock";

const createMockStore = () => {
    return configureStore({
        reducer: {
            vehicles: vehiclesReducer,
        },
        preloadedState: {
            vehicles: {
                vehicles: [],
                selectedVehicle: null,
                loading: false,
                error: null,
            },
        },
    });
};

describe("<VehicleCard /> Tests", () => {
    it("Should render as an article element", () => {
        const store = createMockStore();
        const { container } = render(
            <Provider store={store}>
                <VehicleCard vehicle={mockVehicle} index={0} />
            </Provider>
        );
        expect(container.querySelector("article")).not.toBeNull();
    });

    it("Should have correct ARIA attributes", () => {
        const store = createMockStore();
        const { container } = render(
            <Provider store={store}>
                <VehicleCard vehicle={mockVehicle} index={0} />
            </Provider>
        );
        const article = container.querySelector("article");
        expect(article.getAttribute("aria-label")).toBe(
            "View details for fpace vehicle"
        );
    });

    it("Should apply correct CSS class", () => {
        const store = createMockStore();
        const { container } = render(
            <Provider store={store}>
                <VehicleCard vehicle={mockVehicle} index={0} />
            </Provider>
        );
        expect(container.querySelector(".vehicle-card")).not.toBeNull();
    });

    it("Should apply animation delay based on index", () => {
        const store = createMockStore();
        const { container } = render(
            <Provider store={store}>
                <VehicleCard vehicle={mockVehicle} index={2} />
            </Provider>
        );
        const article = container.querySelector("article");
        expect(article.style.animationDelay).toBe("0.2s");
    });

    it("Should render VehicleImage component", () => {
        const store = createMockStore();
        render(
            <Provider store={store}>
                <VehicleCard vehicle={mockVehicle} index={0} />
            </Provider>
        );
        const img = screen.getByRole("img");
        expect(img).toBeTruthy();
    });

    it("Should render VehicleDetails component", () => {
        const store = createMockStore();
        render(
            <Provider store={store}>
                <VehicleCard vehicle={mockVehicle} index={0} />
            </Provider>
        );
        expect(screen.getByText("fpace")).toBeTruthy();
        expect(screen.getByText(/From/i)).toBeTruthy();
        expect(screen.getByText("Jaguar")).toBeTruthy();
    });

    it("Should pass vehicle prop to child components", () => {
        const store = createMockStore();
        render(
            <Provider store={store}>
                <VehicleCard vehicle={mockVehicle} index={0} />
            </Provider>
        );
        expect(screen.getByText(mockVehicle.id)).toBeTruthy();
        const img = screen.getByRole("img");
        expect(img.getAttribute("src")).toBe(mockVehicle.media[0].url);
    });
});
