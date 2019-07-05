import axios from 'axios';

// const server = 'http://tag-sever-ar.herokuapp.com';
const server = 'http://172.16.25.113:8080';

const GET_NEARBY_TAGS = 'GET_NEARBY_TAG';
const GET_SELECTED_TAG = 'GET_SELECTED_TAG';

const initialState = {
  nearByTags: [],
  selectedTag: {}
};

const gotNearbyTags = tags => ({
  type: GET_NEARBY_TAGS,
  tags
});

const gotSelectedTag = tag => ({
  type: GET_SELECTED_TAG,
  tag
});

export const getNearbyTags = (lat, long) => {
  return async dispatch => {
    try {
      let { data } = await axios.get(
        `${server}/api/tags/?lat=${lat}&long=${long}`
      );
      dispatch(gotNearbyTags(data));
    } catch (error) {
      console.warn(error);
    }
  };
};

export const getSelectedTag = id => {
  return async dispatch => {
    try {
      let { data } = await axios.get(`${server}/api/tags/${id}`);
      dispatch(gotSelectedTag(data));
    } catch (error) {
      console.warn(error);
    }
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NEARBY_TAGS:
      return { ...state, nearByTags: action.tags };
    case GET_SELECTED_TAG:
      return { ...state, selectedTag: action.tag };
    default:
      return state;
  }
}
