import { fakeData } from '../api/fakeData'
import {
  CREATE_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE,
} from '../constants/profileConstants'

const initialState = {
  profile: fakeData,
}

function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_PROFILE:
      return {
        ...state,
        profile: [...state.profile, payload],
      }

    case UPDATE_PROFILE:
      return {
        ...state,
        profile: [
          ...state.profile.filter((profile) => profile.id !== payload.id),
          payload,
        ],
      }

    case DELETE_PROFILE:
      return {
        ...state,
        profile: [...state.profile.filter((profile) => profile.id !== payload)],
      }

    default:
      return state
  }
}

export default eventReducer
