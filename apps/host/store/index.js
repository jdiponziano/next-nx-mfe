import { atom } from 'recoil';

export const counter = atom({
  key: 'counter', // unique ID (with respect to other atoms/selectors)
  default: 32 // default value (aka initial value)
});
