/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
    length  = typeof(length)==='number' ? length : 0;
    width = typeof(width)==="number" ? width : 0;

    return length*width;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
    length  = typeof(length)==='number' ? length : 0;
    width = typeof(width)==="number" ? width : 0;


    return 2*(length+width);
}
