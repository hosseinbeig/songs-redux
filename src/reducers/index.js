import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'rotab', duration: '4.30' },
    { title: 'akhar shab', duration: '3.38' },
    { title: 'donya', duration: '2.40' },
    { title: 'afsoos', duration: '6.50' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
