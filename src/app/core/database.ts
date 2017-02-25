export class Database {
  private static VERSION: number = 2;
  private db: any;

  constructor() {

  }

  public open(success: () => void, error:(any)) {
    let db = window.indexedDB;
    let self: Database = this;

    if(!db) {
      alert('You are using an unsupported (old) browser. Please use a newer browser! Reason: no support for indexedDB :(');
    }

    let open_req: any = db.open('GameDatabase', Database.VERSION);
    open_req.onerror = function(evt) {
      alert('Well, you can still play, but nothing will be saved. Better hope you never kill this tab...');
      error(evt);
    };
    open_req.onsuccess = function(evt) {
      self.db = evt.target.result;
      success();
    };
    open_req.onupgradeneeded = function(evt) {
      let db = evt.target.result;
      let store = db.createObjectStore('gameState', {keypath: 'GS'});
      store.transaction.oncomplete = function(evt) {
        console.log('Database version ' + Database.VERSION + ' created');
      }
    }
  }

  private get_(key: any, success:(any), error:(any)) {
    let transaction = this.db.transaction(['gameState']);

    transaction.onerror = function(evt) {
      error(evt);
    };

    let store = transaction.objectStore('gameState');
    let req = store.get(key);

    req.onsuccess = function(evt) {
      success(req.result);
    };
  }

  public get(key: any, success: (any), error: (any)) {
    let self: Database = this;

    if (!self.db) {
      self.open(() => {
        self.get_(key, success, error);
      }, (evt) => {
        error(evt);
      });
    } else {
      self.get(key, success, error);
    }
  }

  private put_(key: any, value: any, success: () => void, error: (any)) {
    let transaction = this.db.transaction(['gameState'], 'readwrite');

    transaction.onerror = function(evt) {
      error(evt);
    };

    transaction.oncomplete = function (evt) {
      success();
    };

    let store = transaction.objectStore('gameState');
    let req = store.add(value, key);
  }

  public put(key: any, value: any, success: () => void, error: (any)) {
    let self: Database = this;

    if(!self.db) {
      self.open(() => {
        self.put_(key, value, success, error);
      }, (evt) => {
        error(evt);
      })
    } else {
      self.put_(key, value, success, error);
    }
  }

  private update_(key: any, value: any, success: () => void, error: (any)) {
    let transaction = this.db.transaction(['gameState'], 'readwrite');

    transaction.onerror = function(evt) {
      error(evt);
    };

    transaction.oncomplete = function(evt) {
      success();
    };

    let store = transaction.objectStore('gameState');
    let req = store.put(value, key);
  }

  public update(key: any, value: any, success: () => void, error: (any)) {
    let self: Database = this;

    if(!self.db) {
      self.open(() => {
        self.update_(key, value, success, error);
      }, (evt) => {
        error(evt);
      })
    } else {
      self.update_(key, value, success, error);
    }
  }
}
