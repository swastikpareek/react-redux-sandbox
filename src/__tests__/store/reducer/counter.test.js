import counterReducer from '../../../reducers/counter';
import {increament, decreament, signIn, signOut} from '../../../actions/counter';

(() => {
  describe("Reducers", () => {
    let action;
    const state = {
        counter: 0,
        loggedIn: false
    };

    describe("counter reducer", () => {
      describe("INCREAMENT reducer", () => {
        beforeAll(() => {
          action = increament();
        });

        it("should increase counter", () => {
          expect(counterReducer(state, action).counter).toEqual(1);
        });
      });

      describe("DECREAMENT reducer", () => {
        beforeAll(() => {
          action = decreament();
        });

        it("should decrease counter", () => {
          expect(counterReducer(state, action).counter).toEqual(-1);
        });
      });
    });

    describe("loggedIn reducer", () => {
      describe("SIGN_IN reducer", () => {
        beforeAll(() => {
          action = signIn();
        });

        it("should set loggedIn to true", () => {
          expect(counterReducer(state, action).loggedIn).toEqual(true);
        });
      });

      describe("SIGN_OUT reducer", () => {
        beforeAll(() => {
          action = signOut();
        });

        it("should set loggedIn to false", () => {
          expect(counterReducer(state, action).loggedIn).toEqual(false);
        });
      });
    });
  });
})();
