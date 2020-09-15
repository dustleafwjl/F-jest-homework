const verifyPassword = jest.fn();
const verifyUsername = jest.fn().mockImplementation(() => true);

export { verifyPassword, verifyUsername };
