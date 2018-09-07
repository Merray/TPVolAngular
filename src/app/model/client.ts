export class Client {
  get id_client(): number {
    return this._id_client;
  }

  set id_client(value: number) {
    this._id_client = value;
  }
  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get numeroTel(): number {
    return this._numeroTel;
  }

  set numeroTel(value: number) {
    this._numeroTel = value;
  }

  get numeroFax(): number {
    return this._numeroFax;
  }

  set numeroFax(value: number) {
    this._numeroFax = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  constructor(private _id_client?: number, private _nom?: string, private _numeroTel?: number, private _numeroFax?: number,
              private _email?: string) {


  }
}
