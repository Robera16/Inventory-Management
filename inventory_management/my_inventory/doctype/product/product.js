// Copyright (c) 2022, Robera Workneh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Product', {
	setup: function(frm){
		frappe.msgprint(__('first submit'))
	},
	refresh: function(frm) {
		frappe.msgprint(__("hello world"))
	}
});
