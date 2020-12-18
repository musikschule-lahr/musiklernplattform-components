// import LaneHeader from './Lane/LaneHeader'
// import LaneFooter from './Lane/LaneFooter'
// import Card from './Card'
// import Loader from './Loader'
// import NewLaneForm from './NewLaneForm'
// import NewCardForm from './NewCardForm'
// import AddCardLink from './AddCardLink'
// import NewLaneSection from './NewLaneSection'
// import {GlobalStyle, Section, BoardWrapper, ScrollableLane } from 'rt/styles/Base'

import LaneHeader from './Lane/LaneHeader';
import CardTimetable from './CardTimetable';
import NewCardForm from './NewCardForm';
import AddCardLink from './AddCardLink';
import { BoardWrapper, Section, ScrollableLane } from './styles/Base';

export default {
  BoardWrapper,
  Section,
  ScrollableLane,
  LaneHeader,
  Card: CardTimetable,
  NewCardForm,
  AddCardLink,
};
