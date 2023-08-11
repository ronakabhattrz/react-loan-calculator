import { useReducer } from 'react';

const initialState = {
  initialized: false,
  loanAmount: 50000,
  remainingTerm: '',
  interestRate: 6.25,
  interestRateList:[],
  firstName: '',
  lastName: '',
  emailAddress: ''
};

// Loop from 1 to 300 and add each number to the interestRateList array
for (let i = 1; i <= 240; i++) {
  initialState.interestRateList.push(i);
}


function reducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE':
      return { ...state, initialized: action.value };
    case 'LOAN_AMOUNT':
      return { ...state, loanAmount: action.value };
    case 'REMAINING_TERM':
      return { ...state, remainingTerm: action.value };
    case 'INTEREST_RATE':
      return { ...state, interestRate: action.value };
    case 'INTEREST_RATE_LIST':
      return { ...state, interestRateList: action.value };
    case 'FIRST_NAME':
      return { ...state, firstName: action.value };
    case 'LAST_NAME':
      return { ...state, lastName: action.value };
    case 'EMAIL_ADDRESS':
      return { ...state, emailAddress: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function useStore() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}

export default useStore;