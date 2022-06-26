// Copyright (c) 2022, Robera Workneh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales', {

	// before_save: function(frm){
	// 	frappe.call({
	// 		method: "update_stockk",
	// 		args: {
	// 			doctype: "Stockk",
	// 			name: frm.doc.codee
	// 		}
	// 	})
	// }
	


	// validate(frm) {
	//  var doc = frappe.call({
	// 	method: "frappe.client.get",
	// 	args: {
	// 		doctype: "Stockk",
	// 		name: frm.doc.codee,
	// 	},
	// 	callback(r) {
	// 		if(r.message) {
	// 			// frm.doc.codee
	// 			console.log(r.message)
	// 			console.log('frm', frm.doc.qty)
	// 			console.log('other', r.message.qty)
	// 			console.log('document', doc)
	// 			doc.qty=0
	// 			doc.save()
	// 			// doc.save()
	// 			// doc = r.message
	// 			// frappe.throw(__("ERROR"))
	// 			// frappe.validated = false;
	// 			// frm.disable_save();
	// 		}
	// 	}
	// })

// }
	// before_save: function(frm) {
		
	// 	var docc = frappe.get_doc(
	// 		'Stockk'
	// 	)
	// 	console.log("hre", docc)
	// 	// if (doc){
	// 	// 	console.log('exist')
	// 	// }else{
	// 	// 	console.log('not exist')
	// 	// 	frm.disable_save();
	// 	// }
	// 	// frappe.msgprint(__('first submit'))
	// }
	

	// "Sales": function(frm){
	// 	frm.add_fetch("")

	// }
	// before_save: function(frm) {
		
	// 	// frm.disable_save();
	// 	// frappe.msgprint(__('first submit'))
	// }
});
