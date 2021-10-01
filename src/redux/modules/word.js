import {db} from '../../firebase'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

// Actions
const LOAD = 'card/LOAD';
const CREATE = "card/CREATE";
const DELETE = 'card/DELETE';

// 초기값
const initialState = {
  list: [
    {word: 'HI', explanation:'안녕', example:'hi, there'},
    {word: 'BYE', explanation:'안녕', example:'bye bye'}
],
};

// Action Creators
export function loadCard(card_list){
  return {type: LOAD, card_list}
}

export function createCard(card) {
  return { type: CREATE, card };
}

export function deleteCard(card_index){
  console.log('지울 거', card_index)
  return {type: DELETE, card_index}
}


// 미들웨어
export const loadCardFB = () =>{
  return async function(dispatch){
    const card_data = await getDocs(collection(db, 'dictionary'));
    console.log(card_data)

    let card_list = [];
    card_data.forEach((c) => {
      // console.log(c.data())
      card_list.push({id:c.id, ...c.data()});
    })
    console.log(card_list);

    dispatch(loadCard(card_list))
  }
}

// 데이터 추가
export const createCardFB = (card) =>{
  return async function(dispatch){
    const docRef = await addDoc(collection(db, 'dictionary'), card);
    // console.log(docRef.id, (await getDoc(docRef)).data())

    const card_data = {id:docRef.id, ...card};
    // console.log(card_data)

    dispatch(createCard(card_data));
  }
}

//  데이터 삭제
export const deleteCardFB = (card_id) =>{
  return async function (dispatch, getState){
    if(!card_id){
      window.alert('아이디 없음');
      return;
    }
    const docRef = doc(db, 'dictionary', card_id);
    await deleteDoc(docRef);

    const _card_list = getState().word.list;
    console.log(getState().word)
    const card_index = _card_list.findIndex((c) =>{
      return c.id === card_id;
    })

    dispatch(deleteCard(card_index));
  }
}


//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case 'card/LOAD' :{
      return {list: action.card_list}
    }

    case "card/CREATE": {
      const new_card_list = [...state.list, action.card];
      return {...state, list: new_card_list };
    }

    case 'card/DELETE' :{
      // console.log(state, action);

      const new_card_list = state.list.filter((l,idx) =>{
        return parseInt(action.card_index) !== idx;
      })
      console.log(new_card_list);

      return {...state, list:new_card_list}
    }

    default:
      return state;
  }
}
