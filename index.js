// Name: CLΔ Chat
// ID: cldeltachat
// Description: Plugin for CLΔ Core to enable voice chat functionality.
// By: MikeDEV <https://scratch.mit.edu/users/MikeDEVTheDucklord/>
// License: MIT

/*
	CloudLink Delta Core Extension

	MIT License

	Copyright (C) 2025 CloudLink Delta.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

(function (Scratch) {
	"use strict";

	class CloudLinkDelta_Chat {
		getInfo() {
			return {
				id: "cldeltachat",
				name: "CLΔ Chat",
				menuIconURI: menuIcon,
				blockIconURI: blockIcon,
				color1: "#0F7EBD",
				blocks: [],
				menus: {},
			};
		};
	}

	// Register the extension
	const chat = new CloudLinkDelta_Chat();
	Scratch.extensions.register(chat);
	Scratch.vm.runtime.ext_cldelta_chat = chat;
})(Scratch);