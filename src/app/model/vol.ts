import {Time} from '@angular/common';

export class Vol {
  constructor(private _id?: number, private _dateDepart?: Date, private _dateArrivee?: Date, private _heureDepart?: Time,
              private _heureArrivee?: Time, private _aeroportDepart?: string, private _aeroportArrivee?: string) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dateDepart(): Date {
    return this._dateDepart;
  }

  set dateDepart(value: Date) {
    this._dateDepart = value;
  }

  get dateArrivee(): Date {
    return this._dateArrivee;
  }

  set dateArrivee(value: Date) {
    this._dateArrivee = value;
  }

  get heureDepart(): Time {
    return this._heureDepart;
  }

  set heureDepart(value: Time) {
    this._heureDepart = value;
  }

  get heureArrivee(): Time {
    return this._heureArrivee;
  }

  set heureArrivee(value: Time) {
    this._heureArrivee = value;
  }

  get aeroportDepart(): string {
    return this._aeroportDepart;
  }

  set aeroportDepart(value: string) {
    this._aeroportDepart = value;
  }

  get aeroportArrivee(): string {
    return this._aeroportArrivee;
  }

  set aeroportArrivee(value: string) {
    this._aeroportArrivee = value;
  }
}
