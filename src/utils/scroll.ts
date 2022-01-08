import { RefObject } from "react";
import { SCROLL_META } from "./Constants";

/**
 * Author : Harsha Peddula ,Date: 06-01-2022
 * Function which increments/decrements
 * the scrollLeft property of the gridElement
 * based on the direction
 * @param element 
 * @param direction 
 */
export const onScroll = (
    element: RefObject<HTMLDivElement>,
    direction: 'left' | 'right',
) => {
    if (direction === 'left') {
        element?.current && (element.current.scrollLeft -= SCROLL_META.STEP);
    } else {
        element?.current && (element.current.scrollLeft += SCROLL_META.STEP);
    }
}