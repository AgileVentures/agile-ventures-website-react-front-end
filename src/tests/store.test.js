import store from "../store";

describe("Store", () => {

  it('should return the initial store', async () => {
    expect(store.getState()).toEqual({
      events:   [],
      projects: [],
      hangouts: [],
    })
  })

  it('should update the events', async () => {

    await store.dispatch({
      type: 'GET_EVENTS',
      payload: ["Run the tests"]
    })

    const currentStore = store.getState();
    expect(currentStore).toHaveProperty("events", ["Run the tests"])
  })

  it('should update the projects', async () => {

    await store.dispatch({
      type: 'GET_PROJECTS',
      payload: ["Run the tests"]
    })

    const currentStore = store.getState();
    expect(currentStore).toHaveProperty("projects", ["Run the tests"])
  })

  it('should update the hangouts', async () => {

    await store.dispatch({
      type: 'GET_HANGOUTS',
      payload: ["Run the tests"]
    })

    const currentStore = store.getState();
    expect(currentStore).toHaveProperty("hangouts", ["Run the tests"])
  })
});

