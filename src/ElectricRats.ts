export class ElectricRats{
    private _name: string;
    private _atk: number;
    private _hp: number;

    public constructor(name:string,atk:number,hp:number){
        if (name.trim() == ''){
            throw new Error("A patkány neve nem lehet üres");
        }else{
            this._name=name;
        }
        if (atk < 1 || atk % 1 !== 0){
            throw new Error("ATK nem pozitív egész");
        }else{
            this._atk=atk;
        }
        if (hp < 1 || hp % 1 !== 0){
            throw new Error("DEF nem pozitív egész");
        }else{
            this._hp = hp;
        }
    }

    public get name(){
        return this._name;
    }

    public get atk(){
        return this._atk;
    }

    public get hp(){
        return this._hp;
    }
}