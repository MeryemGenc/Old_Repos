import { CREATE_PROFILE, UPDATE_PROFILE, DELETE_PROFILE } from '../constants/profileConstants'

export function createEvent(profile) {
  return {
    type: CREATE_PROFILE,
    payload: profile,
  }
}

export function updateEvent(profile) {
  return {
    type: UPDATE_PROFILE,
    payload: profile,
  }
}

export function deleteEvent(profileId) {
  return {
    type: DELETE_PROFILE,
    payload: profileId,
  }
}
