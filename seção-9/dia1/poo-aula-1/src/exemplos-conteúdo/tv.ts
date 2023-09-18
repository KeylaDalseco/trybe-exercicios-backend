class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[] ;
  private _connectedTo?: string;

  constructor(
    b: string,
    s: number,
    r: string,
    c:string[],
    cT?: string
    ) {
      this._brand = b;
      this._size = s;
      this._resolution = r;
      this._connections = c;
      this._connectedTo = cT;
    }

    turnOn():void {
      console.log(
        `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
  available connections: ${this._connections}`,
      );
    }

    get connectedTo():string | undefined {
      return this._connectedTo;
    }

    set connectedTo(value: string | undefined) {
      if (value) {
        this._connectedTo = value;
        console.log(this._connectedTo);
      } else {
        console.log('Sorry, connection unavailable!');
      }
    }
};

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv1.connectedTo = 'wi-fi';
console.log('Connected to: ', tv1.connectedTo);

tv1.turnOn();