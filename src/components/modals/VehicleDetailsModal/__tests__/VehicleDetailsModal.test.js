import { render, screen, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import vehiclesReducer from "../../../../store/vehiclesSlice";
import VehicleDetailsModal from "../VehicleDetailsModal";
import "../../../../__mocks__/dialogMock";
import { mockVehicle } from "../../../../__mocks__/vehicleMock";
import ModalPopup from "../ModalPopup";

const createMockStore = () => {
    return configureStore({
        reducer: {
            vehicles: vehiclesReducer,
        },
        preloadedState: {
            vehicles: {
                vehicles: [],
                selectedVehicle: mockVehicle,
                loading: false,
                error: null,
            },
        },
    });
};

describe("VehicleDetailsModal", () => {
    it("renders modal when open is true", () => {
        const store = createMockStore();
        const { container } = render(
            <Provider store={store}>
                <ModalPopup
                    children={<VehicleDetailsModal />}
                    open
                    onClose={() => {}}
                />
            </Provider>
        );
        const dialog = document.querySelector(".modal-popup");
        expect(dialog).toBeTruthy();
        expect(screen.getByText(/Jaguar/i)).toBeTruthy();
        expect(screen.getByText(/Price:/i)).toBeTruthy();
        expect(screen.getByText(/Passengers:/i)).toBeTruthy();
        expect(screen.getByText(/Body Style:/i)).toBeTruthy();
        expect(screen.getByText(/Drivetrain:/i)).toBeTruthy();
        expect(screen.getByText(/CO2: 150 g\/km/i)).toBeTruthy();
    });

    it("does not render modal when open is false", () => {
        render(
            <Provider store={createMockStore()}>
                <ModalPopup
                    children={<VehicleDetailsModal />}
                    open={false}
                    onClose={() => {}}
                />
            </Provider>
        );
        const dialog = document.querySelector(".modal-popup");
        expect(dialog).toBeFalsy();
    });

    it("calls onClose when close button is clicked", () => {
        const onClose = jest.fn();
        render(
            <Provider store={createMockStore()}>
                <ModalPopup
                    children={<VehicleDetailsModal />}
                    open
                    onClose={onClose}
                />
            </Provider>
        );
        fireEvent.click(screen.getByLabelText(/close modal/i));
        expect(onClose).toHaveBeenCalled();
    });
});
