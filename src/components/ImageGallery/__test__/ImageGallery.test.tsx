import ImageGallery from "..";
import { render,fireEvent } from '../../../test-utils/test-utils';
import { mockState } from "../../../mockData/AppMock";

describe('Test Suite for Image Gallery Component', () => {
    test('Initial Load', () => {
        const container = render(<ImageGallery />, { initialState: { ...mockState } })
        expect(container.getByTestId('approvedImage0')).toBeInTheDocument()
    })
    test('Test Click of the Right and Left Buttons', () => {
        const container = render(<ImageGallery />, { initialState: { ...mockState } })
        expect(container.getByTestId('rightButton')).toBeInTheDocument()
        fireEvent.click(container.getByTestId('rightButton'))
        expect(container.getByTestId('leftButton')).toBeInTheDocument()
        fireEvent.click(container.getByTestId('leftButton'))
    })
})