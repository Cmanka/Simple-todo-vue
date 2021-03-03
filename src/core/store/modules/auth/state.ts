export interface State {
  data: {
    uid: string;
  };
  loading: boolean;
  error: string;
}

export const initialState: State = {
  data: {
    uid: null,
  },
  loading: false,
  error: null,
};
