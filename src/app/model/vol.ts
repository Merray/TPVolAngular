import {Time} from '@angular/common';

export class Vol {
  constructor(private _id?: number, private _datedepart?: Date, private _datearrivee?: Date, private _heuredepart?: Time,
              private _heurearrivee?: Time) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get datedepart(): Date {
    return this._datedepart;
  }

  set datedepart(value: Date) {
    this._datedepart = value;
  }

  get datearrivee(): Date {
    return this._datearrivee;
  }

  set datearrivee(value: Date) {
    this._datearrivee = value;
  }

  get heuredepart(): Time {
    return this._heuredepart;
  }

  set heuredepart(value: Time) {
    this._heuredepart = value;
  }

  get heurearrivee(): Time {
    return this._heurearrivee;
  }

  set heurearrivee(value: Time) {
    this._heurearrivee = value;
  }
}
