import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import VehicleDetails from "../VehicleDetails";
import { store } from "../../../store/store";
import { mockVehicle } from "../../../__mocks__/vehicleMock";

describe("<VehicleDetails /> Tests", () => {
    it("Should render vehicle ID", () => {
        render(
            <Provider store={store}>
                <VehicleDetails vehicle={mockVehicle} />
            </Provider>
        );
        expect(screen.getByText("fpace")).toBeTruthy();
    });

    it('Should render vehicle price with "From" prefix', () => {
        render(
            <Provider store={store}>
                <VehicleDetails vehicle={mockVehicle} />
            </Provider>
        );
        expect(screen.getByText(/From/i)).toBeTruthy();
        expect(screen.getByText(/£50,000/)).toBeTruthy();
    });

    it("Should render vehicle description", () => {
        render(
            <Provider store={store}>
                <VehicleDetails vehicle={mockVehicle} />
            </Provider>
        );
        expect(screen.getByText("Jaguar")).toBeTruthy();
    });

    it("Should have proper ARIA label for price", () => {
        render(
            <Provider store={store}>
                <VehicleDetails vehicle={mockVehicle} />
            </Provider>
        );
        const priceElement = screen.getByLabelText(/Starting price £50,000/i);
        expect(priceElement).toBeTruthy();
    });

    it("Should apply correct CSS classes", () => {
        const { container } = render(
            <Provider store={store}>
                <VehicleDetails vehicle={mockVehicle} />
            </Provider>
        );
        expect(
            container.querySelector(".vehicle-card__details")
        ).not.toBeNull();
        expect(
            container.querySelector(".vehicle-card__details-id")
        ).not.toBeNull();
        expect(
            container.querySelector(".vehicle-card__details-price")
        ).not.toBeNull();
        expect(
            container.querySelector(".vehicle-card__details-description")
        ).not.toBeNull();
    });
});
