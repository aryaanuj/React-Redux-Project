
// actions
const newBooking = (name,amount) =>{
	return {
		type:'NEW_BOOKING',
		payload:{
			name,
			amount
		}
	}
}

const cancelBooking = (name, refundamount) => {
	return {
		type:'CANCEL_BOOKING',
		payload:{
			name,
			refundamount
		}
	}
}

// Reducers

const reservationHistory = (oldreservations=[],{type,payload}) => {
	if(type=='NEW_BOOKING'){
		return [...oldreservations, payload];
	}else if(type=='CANCEL_BOOKING'){
		return oldreservations.filter((record)=>{
			return record.name !== payload.name;
		});
	}
	return oldreservations;
}

const cancelReservationHistory = (oldCancellationHistory=[], {type,payload}) =>{
	if(type=="CANCEL_BOOKING"){
		return [...oldCancellationHistory,payload];
	}

	return oldCancellationHistory;
}

const accounting = (totalAmount=100,{type,payload}) =>{
	if(type=="NEW_BOOKING"){
		return totalAmount + payload.amount;
	}else if(type=="CANCEL_BOOKING"){
		return totalAmount - payload.refundamount;
	}
	return totalAmount;
}


// store
console.log(Redux);

const {combineReducers, createStore} = Redux;

const RailwayReservationStore = combineReducers({
	accounting:accounting,
	reservationHistory:reservationHistory,
	cancelReservationHistory:cancelReservationHistory
});

const store = createStore(RailwayReservationStore,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.dispatch(newBooking('anuj',200));
store.dispatch(newBooking('amit',100));
store.dispatch(newBooking('sumit',300));

store.dispatch(cancelBooking('anuj',100));

console.log(store.getState());












