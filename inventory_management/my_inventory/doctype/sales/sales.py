# Copyright (c) 2022, Robera Workneh and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe 
from frappe import  _

class Sales(Document):
	@frappe.whitelist()
	def update_stockk(doctype, name):
		print("hallo", doctype, name)

