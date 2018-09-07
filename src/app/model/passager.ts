import {Reservation} from './reservation';
import {Adresse} from './adresse';

export class Passager {
  constructor(private _idPassager?: number, private _nom?: string, private _prenom?: string, private _adresse?: Adresse, private _reservations?: Reservation[]) {

  }

  get idPassager(): number {
    return this._idPassager;
  }

  set idPassager(value: number) {
    this._idPassager = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get reservations(): Reservation[] {
    return this._reservations;
  }

  set reservations(value: Reservation[]) {
    this._reservations = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }
}
