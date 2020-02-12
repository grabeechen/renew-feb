import { configure } from 'mobx';

configure({ enforceActions: 'always' });

class Store {}

const store = new Store();

export default store;
