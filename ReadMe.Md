## Dom (Document Object Model )

Document = window.document

1. Document Getter
2. Document Selectors

## introduction of Document

Documents => The HTML DOM model is constructed as a tree of Objects:

document ->html (html is a child of document ) -> body , head (this elements is child of Html Element )

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

> > > > You can swear Dom into Sections:

1.  Finding HTML Elements (Single Elements):

- document.getElementById('id') => to search the id in the elements
- document.getElementsByTagName('tag') => to search the tag in the element
- document.getElementsByClassName(name) => class
- document.getElementsByName(name) => =>search At name Attribute

* - Note: document.getElementById=> return unique value , getter => return collection of values

2. How to change to the Html Element ?

- Property => .property
  > .innerHTML =
  > .attribute
  > .innerText
  > .src
  > .name
  > .style
  > ....
- method
  > setAttribute(attribute,value)
  > removeAttribute(attribute)
  > ...

3. Adding Events Handler
   Ex: document.getElementById(id).onclick = function(){code} -> Adding event handler code to an onclick event

4. Create And Delete Elements

- document.createElement(element) => Create an HTML element
- document.removeChild(element) => Remove an HTML element
- document.appendChild(element) => Add an HTML element
- document.replaceChild(new, old) => Replace an HTML element
- document.write(text) => Write into the HTML output stream


5. Dom Form => Html Validation Can be Done By Js 