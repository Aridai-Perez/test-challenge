const DNA = require('../dna');

test("Evaluate DNA", () => {
    expect(DNA("CTAbmnnbmnbmGGGTA")).toEqual("CTAGGGTA");
})
