function calculateArea(shape) {
  switch(shape) {
    case "circle":
      return Math.PI * radius ** 2;
    case "square":
      return sideLength ** 2;
    case "rectangle":
      return width * height;
    default:
      throw new Error(`Unsupported shape ${shape}`);
  }
}
