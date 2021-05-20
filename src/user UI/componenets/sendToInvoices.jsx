import { updatePendingInvoices } from '../../redux/actions'
import firebase from '../../config/firebase';
const handleBookPress = (id, name, theme, menu, venu, price, type, dispatch) => {
    const invoice = {
        theme,
        menu,
        venu,
        price,
        eventName: type,
        isPackage: true,
        serPackName: name,
        serPackId: id,
        userEmail: 'akifmuhammad321@gmail.com',
        bookDate: new Date().toString(),
        occuredDate: false,
        designerName: 'Mast Qalandar',
        status: 'inprogress'
    }
    firebase.database().ref('pendingInvoices/').push(invoice).then((data) => {
        //success callback
        dispatch(updatePendingInvoices(invoice))
        alert('Successfully added to Invoices', 'Please go to invoice section to clear first and continue.', [{ text: 'Ok' }])
    }).catch((error) => {
        //error callback
        alert("Can't book package.", 'Please check your internet connection!', [{ text: 'OK', style: 'destructive' }])
    })
}
    export default handleBookPress;
