import timeConvert from "./timeConvert";

describe('Time Convert', () => {
  it('Should return correct format', () => {
    const timeConverted = timeConvert(110);
    expect(timeConverted).toBe("1 Hrs 50 mins");
  });
});
