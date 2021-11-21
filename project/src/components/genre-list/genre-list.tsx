// import {connect, ConnectedProps} from 'react-redux';
// import {Dispatch} from 'redux';
// import {setGenre} from '../../store/action';
// import {Actions, State} from '../../types/types';
import {GenreList} from '../../const';

const genreType2Text = {
  [GenreList.AllGenres]: 'All genres',
  [GenreList.Crime]: 'Crime',
  [GenreList.Comedies]: 'Comedies',
  [GenreList.Documentary]: 'Documentary',
  [GenreList.Dramas]: 'Dramas',
  [GenreList.Horror]: 'Horror',
  [GenreList.KidsAndFamily]: 'Kids & Family',
  [GenreList.Romance]: 'Romance',
  [GenreList.SciFi]: 'Sci-Fi',
  [GenreList.Thrillers]: 'Thrillers',
};
//
// const mapStateToProps = (state: State) => ({
//   activeGenre: state.genre,
// });
//
// const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
//   onGenreClick(genre: GenreList) {
//     dispatch(setGenre(genre));
//   },
// });
//
// const connector = connect(mapStateToProps, mapDispatchToProps);
//
// type GenreProps = ConnectedProps<typeof connector> & {
//   activeGenre: GenreList,
// }
function GenresList(): JSX.Element {
// function GenresList(props: GenreProps): JSX.Element {
//   const {activeGenre, onGenreClick} = props;

  const handleGenreClick = (genre: GenreList) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    // onGenreClick(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {Object.values(GenreList).map((it) => (
        <li
          key={it}
          // className={`catalog__genres-item ${it === activeGenre ? 'catalog__genres-item--active' : ''} `}
        >
          <a href={'/'} className="catalog__genres-link" id={`genre-${it}`} onClick={handleGenreClick(it)}>
            {genreType2Text[it]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
