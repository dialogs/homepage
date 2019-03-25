/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * https://github.com/dialogs/dialog-js-utils/blob/master/src/redux/field.js
 */

export class Field {
  static dispatch({ type, action, context, dispatch, initialState }) {
    dispatch({
      type,
      payload: new Field(initialState, null, true),
      meta: { context },
    });

    action.then(
      (value) => {
        dispatch({
          type,
          payload: new Field(value, null, false),
          meta: { context },
        });
      },
      (error) => {
        dispatch({
          type,
          payload: new Field(initialState, error, false),
          meta: { context },
        });
      },
    );
  }

  static create({ value, error, pending }) {
    return new Field(value, error, pending);
  }

  constructor(value, error = null, pending = false) {
    this.value = value;
    this.error = error;
    this.pending = pending;
  }

  map(mapper) {
    return new Field(
      mapper(this.value, this.error, this.pending),
      this.error,
      this.pending,
    );
  }

  flatMap(mapper) {
    return mapper(this.value, this.error, this.pending);
  }

  render(mapper) {
    return mapper(this.value, this.error, this.pending);
  }
}
