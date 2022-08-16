'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}

class PageElement {
  constructor() {
    this.id = uuid();
    this.name = "New Element";
    this.style = {};
    this.props = {};
    this.events = {};
  }
  static create(e) {
    const element = new PageElement();
    if (e) {
      element.name = e.name;
      element.id = e.id;
      element.mId = e.mId;
      element.mVersion = e.mVersion;
      element.style = e.style;
      element.props = e.props || {};
      element.events = e.events || {};
    }
    return element;
  }
  getJson() {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion,
      style: this.style,
      props: this.props,
      events: this.events
    };
  }
}

class Page {
  constructor() {
    this.name = "New Page";
    this.description = "New Page Description";
    this.snapshots = [[]];
    this._elements = [];
  }
  get elements() {
    return this._elements.map((p) => p.getJson());
  }
  static create(p) {
    const page = new Page();
    if (p) {
      page.name = p.name;
      page.description = p.description;
      page._elements = p.elements.map(
        (element) => PageElement.create(element)
      );
      page.snapshots = p.snapshots ? p.snapshots.map((elements) => [...elements]) : [[]];
    }
    return page;
  }
  getElementById(id) {
    return this._elements.find((e) => e.id === id);
  }
  addElement(element) {
    this._elements.push(element);
  }
  removeElement(element) {
    const index = this._elements.indexOf(element);
    if (index >= 0) {
      this._elements.splice(index, 1);
    }
  }
  insertElement(index, element) {
    this._elements.splice(index, 0, element);
  }
  refreshElements(index) {
    const newSnapshot = this.snapshots[index];
    this._elements.splice(0, this._elements.length);
    this._elements.push(...newSnapshot);
  }
  saveSnapshot() {
    this.snapshots.push(this._elements.map((element) => PageElement.create(element)));
  }
  removeSnapshots(index) {
    const snapshotsLength = this.snapshots.length;
    console.log("Before remove snapshots", this.snapshots);
    if (index >= snapshotsLength) {
      return;
    }
    console.log("To be removed: ", index + 1, snapshotsLength - index - 1);
    console.log("After remove snapshots: ", this.snapshots);
  }
  getJson() {
    return {
      name: this.name,
      description: this.description,
      elements: this.elements,
      snapshots: this.snapshots
    };
  }
}

class Project {
  constructor() {
    this.name = "New Project";
    this.description = "New Project Description";
    this._pages = [];
  }
  static create(p) {
    const project = new Project();
    if (p) {
      project.id = p.id;
      project.name = p.name;
      project.description = p.description;
      project._pages = p.pages.map((page) => Page.create(page));
    } else {
      project.addPage(Page.create());
    }
    return project;
  }
  get pages() {
    return this._pages.map((p) => p.getJson());
  }
  getPageByIndex(index) {
    return this._pages[index];
  }
  addPage(page) {
    this._pages.push(page);
  }
  removePage(page) {
    const index = this._pages.indexOf(page);
    if (index >= 0) {
      this._pages.splice(index, 1);
    }
  }
  insertPage(index, page) {
    this._pages.splice(index, 0, page);
  }
  getJson() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      pages: this.pages
    };
  }
}

exports.Page = Page;
exports.PageElement = PageElement;
exports.Project = Project;
exports.uuid = uuid;
