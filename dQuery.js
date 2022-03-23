//@ts-check
"use strict";

export class dQuery {
	/**
	 * @type {any}
	 */
	doc = [];

	/**
	 * @param {string} element
	 **/
	constructor(element) {
		this.doc = document.querySelectorAll(element);
		if (this.doc.length === 1) {
			this.doc = this.doc[0];
		}
		return this;
	}

	first = () => {
		if (typeof this.doc[0] !== "undefined") {
			this.doc = this.doc[0];
		}
		return this;
	};

	/**
	 * @param {string} html
	 **/
	html = (html) => {
		this.doc.innerHTML = html;
		return this;
	};

	/**
	 * @param {Array<any>} list
	 * @param {Function} callback
	 **/
	foreach = (list, callback) => {
		for (let i = 0; i < list.length - 1; i++) {
			callback(list[i]);
		}
		return this;
	};

	/**
	 * @param {string} paragraph
	 **/
	paragraph = (paragraph) => {
		this.doc.innerHTML = `<p>${paragraph}</p>`;
		return this;
	};

	/**
	 * @param {string} element
	 **/
	appendToList = (element) => {
		var newElement = document.createElement("li");
		newElement.appendChild(document.createTextNode(element));
		this.doc.appendChild(newElement);
		return this;
	}

	/**
	 * @param {Function} callback
	 **/
	afterPageLoad = (callback) => {
		document.addEventListener("DOMContentLoaded", () => callback(/** @type {dQuery} */ this));
	}
}
