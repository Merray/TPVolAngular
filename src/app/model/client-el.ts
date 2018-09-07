import {Client} from './client';

export class ClientEl extends Client {
  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  constructor(private _prenom?: string) {
    super();
  }
}
