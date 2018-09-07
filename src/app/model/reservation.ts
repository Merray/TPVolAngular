export class Reservation {

  // private _client?: client, private _vol?: vol, private _passager?: passager
  constructor(private _id?: number, private _date?: Date, private _numero?: number
  ) {

  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  /* get client(): client {
     return this._client;
   }

   set client(value: client) {
     this._client = value;
   }

   get vol(): vol {
     return this._vol;
   }

   set vol(value: vol) {
     this._vol = value;
   }

   get passager(): passager {
     return this._passager;
   }

   set passager(value: passager) {
     this._passager = value;
   }*/
}
